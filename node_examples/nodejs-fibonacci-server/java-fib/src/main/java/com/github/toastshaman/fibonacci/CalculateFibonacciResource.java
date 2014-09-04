package com.github.toastshaman.fibonacci;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.github.toastshaman.domain.FibResult;
import com.google.common.base.Optional;

@Path("/calculate/fibonacci")
@Produces(MediaType.APPLICATION_JSON)
public class CalculateFibonacciResource {

    @Inject
    private CalculateFibonacciService service;
    
    @GET
    public FibResult calculate(@QueryParam("n") Optional<Long> n) {
        return new FibResult(service.computeFib(n.or(40L)));
    }
}
