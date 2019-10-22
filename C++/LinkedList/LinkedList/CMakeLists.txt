# CMakeList.txt : CMake project for LinkedList, include source and define
# project specific logic here.
#
cmake_minimum_required (VERSION 3.8)

# Include sub-projects.
add_subdirectory ("Node")

# Add source to this project's executable.
add_executable (${PROJECT_NAME} "LinkedList.cpp" "LinkedList.h")

# link the project with his dependencies 
    target_link_libraries(LinkedList Node) 
