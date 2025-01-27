#include<stdio.h>
#include<string.h>
#include<stdlib.h>

#define MAX_STR_LEN 100

char* createStr(char *orgStr){

    char *initStr = malloc(sizeof(orgStr));

    if(initStr == NULL){
        printf("Error: malloc failded!\n");
        exit(-1);
    }

    strcat(initStr,">> ");
    strcat(initStr,orgStr);

    return initStr;

}

int main(int argc,char** argv){

    printf("%s\n" ,createStr("Baraa Mirghai"));

    int isEqual = strcmp(">> Baraa MirghaniZ",createStr("Baraa Mirghani"));

    printf(">> isEqual: %d", isEqual);


    return 0;
}




