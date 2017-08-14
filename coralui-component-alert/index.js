import 'coralui-externals';
import Alert from './src/scripts/Alert';
import AlertHeader from './src/scripts/AlertHeader';
import AlertContent from './src/scripts/AlertContent';
import AlertFooter from './src/scripts/AlertFooter';

window.customElements.define('coral-alert', Alert);
window.customElements.define('coral-alert-header', AlertHeader);
window.customElements.define('coral-alert-content', AlertContent);
window.customElements.define('coral-alert-footer', AlertFooter);

// Expose component on the Coral namespace
window.Coral = window.Coral || {};
window.Coral.Alert = Alert;
window.Coral.Alert.Header = AlertHeader;
window.Coral.Alert.Content = AlertContent;
window.Coral.Alert.Footer = AlertFooter;

export {Alert, AlertHeader, AlertContent, AlertFooter};