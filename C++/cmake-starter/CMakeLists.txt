cmake_minimum_required(VERSION 3.25)
project(StarterOne VERSION 1.0.0 LANGUAGES C CXX)
set (CMAKE_CXX_STANDARD 11)

add_executable(Executable ./src/main.cpp)
add_library(Library STATIC ./src/TNode.cpp)

target_link_libraries(Executable PUBLIC Library)

####__Generate cmake project__####
#$ cmake -S .. -B .
#$ cmake ..

####__Update Generate cmake project__####
#$ cmake .

####__Finally run make__####
#$ make