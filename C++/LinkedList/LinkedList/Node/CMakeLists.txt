# CMakeList.txt : CMake project for LinkedList, include source and define
# project specific logic here.
#
cmake_minimum_required (VERSION 3.8)

# Add new variable for src utils lib 
    SET(NODE_LIB_SRC 
       LinkedLS.cpp  
       Node.cpp
    ) 

# create our new utils lib 
    add_library(Node ${NODE_LIB_SRC}) 

# make sure the compiler can find include files for our library 
    target_include_directories(Node PUBLIC ${CMAKE_CURRENT_SOURCE_DIR}) 