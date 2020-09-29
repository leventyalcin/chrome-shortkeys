if (/^(((us(-gov)?|ap|ca|cn|eu|sa)-(central|(north|south)?(east|west)?)-\d)|phd)?\.console\.aws\.amazon\.com$/g.test(window.location.hostname)) {
    window.location.href = window.location.protocol + "//eu-west-1.console.aws.amazon.com" + window.location.pathname;
}