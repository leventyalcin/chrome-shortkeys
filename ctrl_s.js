if (/^(((us(-gov)?|ap|ca|cn|eu|sa)-(central|(north|south)?(east|west)?)-\d)|phd)?\.console\.aws\.amazon\.com$/g.test(window.location.hostname)) {
  document.querySelectorAll('[data-testid="aws-services-list-button"]')[0].click()
}