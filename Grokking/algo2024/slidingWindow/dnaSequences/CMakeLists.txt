# 0. mkdir build
# 1. cd build
# 2. cmake ..           #Generate buid files
# 3. cmake --build .
# 4. ./exe             # run the executable file (name can change)
cmake_minimum_required(VERSION 3.22)
set(CMAKE_CXX_STANDARD 11)
project(DnaSequences VERSION 1.0.0 LANGUAGES C CXX)
add_executable(exe ./src/main.cpp)
#target_compile_features(exe PRIVATE c_std_11)