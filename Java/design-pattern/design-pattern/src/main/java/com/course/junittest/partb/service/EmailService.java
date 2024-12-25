package com.course.junittest.partb.service;

public interface EmailService<T> {
    void sendConfirmationEmail(T client, String content);
}
