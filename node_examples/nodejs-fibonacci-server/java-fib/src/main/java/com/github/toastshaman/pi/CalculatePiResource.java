package com.github.toastshaman.pi;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.github.toastshaman.domain.PiResult;
import com.google.common.base.Optional;
import com.yammer.metrics.annotation.Timed;

@Path("/calculate/pi")
@Produces(MediaType.APPLICATION_JSON)
public class CalculatePiResource {

    @Inject
    private CalculatePiService piService;
    
    public CalculatePiResource() {
    }

    @GET
    @Timed
    public PiResult calculate(@QueryParam("digits") Optional<Integer> digits) {
        return new PiResult(piService.computePi(digits.or(50000)));
    }
}
