package com.github.toastshaman.fibonacci;

import java.io.Serializable;

public class CalculateFibonacciService implements Serializable {

    private static final long serialVersionUID = 5736457794517318374L;

    public Long computeFib(final Long n) {
        if (n == 0) return 0L;
        if (n == 1) return 1L;
        if (n == 2) return 1L;
        return inner(1L, 1L, 3, n);
    }
    
    private Long inner(Long n1, Long n2, int i, Long n) {
        if (i > n) {
            return n2;
        }
        return inner(n2, n1 + n2, i + 1, n);
    }
}
