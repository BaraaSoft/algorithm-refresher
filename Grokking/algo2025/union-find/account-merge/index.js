

class UnionFind {

    constructor(length) {
        this.arr = Array.from({ length }, ((_, index) => index));
    }


    find(a) {
        let nextNode = a;
        while (nextNode != this.arr[nextNode]) {
            nextNode = this.arr[nextNode]
        }
        this.arr[a] = nextNode;
        return nextNode;
    }

    union(a, b) {
        const numA = this.find(a);
        const numB = this.find(b);

        if (numA == numB) return false;


        this.arr[numA] = numB;

        return true;
    }
}





/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {

    const emailToAcc = {};
    const unionFind = new UnionFind(accounts.length);

    for (let i = 0; i < accounts.length; i++) {
        let [name, ...emails] = accounts[i];
        for (let email of emails) {
            if (emailToAcc[email] || emailToAcc[email] === 0) {
                unionFind.union(emailToAcc[email], i)
            } else {
                emailToAcc[email] = i
            }
        }
    }

    const accountsMerged = []
    const groupedEmails = {};

    for (const [email, accId] of Object.entries(emailToAcc)) {
        const rootAccId = unionFind.find(accId);
        if (!groupedEmails[rootAccId]) groupedEmails[rootAccId] = [];
        groupedEmails[rootAccId].push(email)
    }


    for (const [accId, emails] of Object.entries(groupedEmails)) {
        accountsMerged.push([accounts[accId][0], ...emails.sort()])
    }



    return accountsMerged;

};




accountsMerge([
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["Mary", "mary@mail.com"], ["John", "johnnybravo@mail.com"]
])

accountsMerge([["David", "David0@m.co", "David4@m.co", "David3@m.co"], ["David", "David5@m.co", "David5@m.co", "David0@m.co"], ["David", "David1@m.co", "David4@m.co", "David0@m.co"], ["David", "David0@m.co", "David1@m.co", "David3@m.co"], ["David", "David4@m.co", "David1@m.co", "David3@m.co"]])