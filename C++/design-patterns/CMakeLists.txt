cmake_minimum_required(VERSION 3.25)
project(DesignPatterns VERSION 1.0.0 LANGUAGES C CXX)
set(CMAKE_CXX_STANDARD 17)


add_executable(factory ./src/factory/main.cpp)
add_executable(prototype ./src/prototype/main.cpp)