package com.baraabytes.explore.xmover;

import java.awt.*;
import java.util.Timer;
import java.util.TimerTask;

public class Mover {

    int coordinateX;
    int coordinateY;
    Robot robot;
    private int width;
    private int height;



    public Mover() {}

    public Mover(Robot robot) {
        this.robot = robot;
    }


    public Mover init() {
        width = (int) Toolkit.getDefaultToolkit().getScreenSize().getWidth()/2;
        height = (int) Toolkit.getDefaultToolkit().getScreenSize().getHeight()/2;
        try {
            this.robot = new Robot();
        }catch (AWTException e){
            System.out.println(">> Failed initializing AWT!");
            System.out.println(e);
        }

        return this;
    }

    private Mover randomMove(){
        this.coordinateX = (int)Math.floor(Math.random()*500);
        this.coordinateY = (int)Math.floor(Math.random()*500);
        robot.mouseMove(coordinateX, coordinateY);
        return this;
    }

    public Mover autoMove(){
        Mover.setInterval(this::randomMove,5000);
        return this;
    }



    public static void setInterval(Runnable callback, int interval){
        Timer timer = new Timer();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                callback.run();
            }
        }, 0, interval);
    }


    public static void setTimeout(Runnable runnable, int delay){
        new Thread(() -> {
            try {
                Thread.sleep(delay);
                runnable.run();
            }
            catch (Exception e){
                System.err.println(e);
            }
        }).start();
    }




    public int getCoordinateX() {
        return coordinateX;
    }

    public void setCoordinateX(int coordinateX) {
        this.coordinateX = coordinateX;
    }

    public int getCoordinateY() {
        return coordinateY;
    }

    public void setCoordinateY(int coordinateY) {
        this.coordinateY = coordinateY;
    }
}
