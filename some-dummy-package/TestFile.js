
class TestFile {

    constructor() {
        this.environment = new Environment();
    }

    getDnsHostOfService1() {
        var activeEnvironment = this.environment.getActiveEnvironment();
        var dnsHost;
        switch (activeEnvironment) {
            case "LOCAL":
                dnsHost = "localhost:8080";
                break;
            case "TESTING":
                dnsHost = "testing-server_service-1.org";
                break;
            case "PRODUCTION":
                dnsHost = "production-server_service-1.org";
                break;
            default:
                throw new Error("Unknown value of activeEnvironment");
        }
        return dnsHost;
    }

}