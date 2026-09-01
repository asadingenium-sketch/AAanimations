/**
 * Google Analytics 4 (GA4) Utility
 * Measurement ID: G-P8G8CH25R5
 * Privacy safe: Strictly no PII (Personally Identifiable Information) is tracked.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-P8G8CH25R5';

/**
 * Generic event tracker that safely calls gtag if available
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track WhatsApp button click
 */
export function trackWhatsAppClick(location: string = 'floating_widget') {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: 'WhatsApp Click',
    click_location: location,
  });
}

/**
 * Track Contact button / CTA click
 */
export function trackContactClick(buttonName: string, location: string = 'header') {
  trackEvent('contact_click', {
    event_category: 'engagement',
    event_label: buttonName,
    click_location: location,
  });
}

/**
 * Track Contact form submission (privacy-safe: only service and budget category, NO names/emails/phones)
 */
export function trackContactFormSubmit(serviceSelected?: string, budgetSelected?: string) {
  trackEvent('contact_form_submit', {
    event_category: 'lead',
    event_label: 'Contact Form Submission',
    service: serviceSelected || 'General Inquiry',
    budget_range: budgetSelected || 'Not Specified',
  });
}

/**
 * Track Quote Estimator form submission (privacy-safe: scope and budget range only)
 */
export function trackQuoteEstimatorSubmit(serviceSelected?: string, budgetRange?: string) {
  trackEvent('quote_estimator_submit', {
    event_category: 'lead',
    event_label: 'Quote Estimator Submission',
    service: serviceSelected || 'Custom Quote',
    budget_range: budgetRange || 'Estimated',
  });
}

/**
 * Track email click (mailto)
 */
export function trackEmailClick(location: string = 'contact_section') {
  trackEvent('email_link_click', {
    event_category: 'engagement',
    event_label: 'Email Link Click',
    click_location: location,
  });
}

/**
 * Track phone click (tel)
 */
export function trackPhoneClick(location: string = 'contact_section') {
  trackEvent('phone_link_click', {
    event_category: 'engagement',
    event_label: 'Phone Link Click',
    click_location: location,
  });
}
