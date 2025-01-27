#include<stdio.h>
#include<string.h>


void genericPointer(){

    void *ptr;


    int intArr[4];
    for (int i = 0; i < 4; i++)
    {
        intArr[i] = 10 + i;
    }

    ptr = intArr;
    for (size_t i = 0; i < 4; i++)
    {

        printf(">> num is : %.4d\n", *(int *)ptr);
        ptr = (int *)ptr +1;
       
    }


    

    char* wordArr[4];
    wordArr[0] = "Mike";
    wordArr[1] = "Rose";
    wordArr[2] = "Jack";
    wordArr[3] = "Dorse";

    ptr = wordArr;

    for (size_t i = 0; i < 4; i++)
    {
        printf(">> %s \n", *(char **)ptr);
        ptr = (char **)ptr +1;
    }
    
     


}


int main(int argc,char **argv){

    char* fullname[] = {"Baraa","Mighani","Mohamed","Abuzaid"};
    int len = sizeof(fullname)/sizeof(fullname[0]);

    char **ptr = fullname;

    for(int i=0;i<len;i++){
        printf(">> %s \n", *ptr);
        ptr = (ptr)+1;
    }


    genericPointer();

    return 0;
}

