#include<stdio.h>
#include<string.h>
// #define DEBUG  



int main(int argc, char const *argv[])
{
    #ifdef DEBUG
        printf(">> running - lowlevel\n");
    #endif

    // >> FAST reference [https://www.programiz.com/c-programming/library-function/string.h/strcat]
    // 
    // concatenates string : strcat(char *destination, char *source) 
    // compare string      : strcmp (const char* str1, const char* str2)
    // copy string         : strcpy(char* destination, const char* source);
    // string length       : strlen(char* str1)


    char *firstName = "Baraa";
    char lastName[] = "Mirghani";

    if(strcmp(firstName,lastName) == 0){
        printf("Same string!\n");
    }else{
        printf("Not the same!\n");
    }

    char *fullName;
    asprintf(&fullName,"%s %s",firstName,lastName);
    printf("fullName: %s\n", fullName);

   
    // char fullName2[strlen(firstName)+strlen(lastName)];
    // strcat(fullName2,firstName);
    // strcat(fullName2,lastName);
    // printf("fullName2:%s\n", fullName2);
    
    return 0;
}
