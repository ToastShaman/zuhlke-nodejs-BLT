package com.github.toastshaman;

import com.github.toastshaman.fibonacci.CalculateFibonacciResource;
import com.github.toastshaman.pi.CalculatePiResource;
import com.google.inject.AbstractModule;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.yammer.dropwizard.Service;
import com.yammer.dropwizard.config.Bootstrap;
import com.yammer.dropwizard.config.Environment;

public class MathService extends Service<ServiceConfiguration> {

    @Override
    public void initialize(final Bootstrap<ServiceConfiguration> bootstrap) {
        bootstrap.setName("math-service");
    }

    @Override
    public void run(final ServiceConfiguration config, final Environment env) throws Exception {
        Injector injector = createInjector(config);
        
        env.addResource(injector.getInstance(CalculatePiResource.class));
        env.addResource(injector.getInstance(CalculateFibonacciResource.class));
    }

    private Injector createInjector(final ServiceConfiguration conf) {
        return Guice.createInjector(new AbstractModule() {
            @Override
            protected void configure() {
                bind(ServiceConfiguration.class).toInstance(conf);
            }
        });
    }

    public static void main(final String[] args) throws Exception {
        new MathService().run(args);
    }
}
