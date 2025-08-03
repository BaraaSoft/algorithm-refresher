class UnionFind {

    constructor(edges) {

        this.graph = new Map();

        for (let [a, b] of edges) {
            this.graph.set(a, a)
            this.graph.set(b, b)
        }

    }

    find(a) {
        let node = this.graph.get(a);

        while (node !== this.graph.get(node))
            node = this.graph.get(node);

        this.graph.set(a, node)
        return node
    }

    union(a, b) {
        const rootA = this.find(a);
        const rootB = this.find(b);


        if (rootA == rootB) return false;
        this.graph.set(rootA, rootB)

        return true;
    }
}