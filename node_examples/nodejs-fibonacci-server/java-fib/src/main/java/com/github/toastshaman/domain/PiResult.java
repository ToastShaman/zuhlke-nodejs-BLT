package com.github.toastshaman.domain;

import java.math.BigDecimal;

public class PiResult {

    private final String pi;
    
	public PiResult(final BigDecimal pi) {
	    this.pi = pi.toPlainString();
	}

	public String getPi() {
        return pi;
    }
}