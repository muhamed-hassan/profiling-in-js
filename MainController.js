
function launcher() {

    var environment = new Environment();
    var activeEnvironment = environment.getActiveEnvironment();
    var collectedOutput = "<div class=\"active-environment-label\">Active environment:</div>" + 
                            "<div class=\"displayed-value\">" + activeEnvironment + "</div>";

    var testFile = new TestFile();
    var dnsHostOfService1 = testFile.getDnsHostOfService1();
    collectedOutput += "<div class=\"dns-host-of-service-1-label\">Chosen DNS-HOST of Service-1 of this active-environment:</div> " + 
                        "<div class=\"displayed-value\">" + dnsHostOfService1 + "</div>";

    document.getElementById("root").innerHTML = collectedOutput;
}