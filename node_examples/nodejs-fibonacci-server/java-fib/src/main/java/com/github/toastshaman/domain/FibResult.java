package com.github.toastshaman.domain;

public class FibResult {

    private final String fib;
    
    public FibResult(final Long fib) {
        this.fib = fib.toString();
    }
    
    public String getFib() {
        return fib;
    }
 }
