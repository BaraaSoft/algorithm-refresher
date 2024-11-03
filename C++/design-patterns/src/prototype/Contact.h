#ifndef CONTACT_H_
#define CONTACT_H_
#include <string>
using namespace std;


class Address{
public:
    string street;
    string city;
    int zipcode;
    Address(string city,string street,int zipcode):city{city},street{street},zipcode{zipcode}{};
    Address():Address{nullptr,nullptr,0}{}

    Address(const Address &address):Address{address.city,address.street,address.zipcode}{}
    ~Address() = default;
};

class Contact
{
public:
    string name;
    Address* address{nullptr};
    Contact(string theName,Address theAddress):name{theName},address{new Address{theAddress}}{}
    Contact(const Contact &contact):Contact{contact.name,*contact.address}{}
    ~Contact(){
        delete address;
    }
};




#endif