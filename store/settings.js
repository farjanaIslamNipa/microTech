import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  settingDefaultWebsiteCustomerPortalLoginUrl: {
    id: '',
    type: 'default',
    key: 'default_website_customer_portal_login_url',
    value: '',
  },
  settingDefaultPagination: {
    id: '',
    type: 'default',
    key: 'default_pagination',
    value: '',
  },
  settingDefaultWebsiteUrl: {
    id: '',
    type: 'default',
    key: 'default_website_url',
    value: '',
  },
  settingDefaultCompanySocialLinkFacebook: {
    id: '',
    type: 'default',
    key: 'default_company_social_link_facebook',
    value: '',
  },
  settingDefaultCompanySocialLinkLinkedin: {
    id: '',
    type: 'default',
    key: 'default_company_social_link_linkedin',
    value: '',
  },
  settingDefaultCompanySocialLinkYoutube: {
    id: '',
    type: 'default',
    key: 'default_company_social_link_youtube',
    value: '',
  },
  settingDefaultWebsiteLogoRegular: {
    id: '',
    type: 'default',
    key: 'default_website_logo_regular',
    value: '',
  },
  settingDefaultContactNumber: {
    id: '',
    type: 'default',
    key: 'default_contact_number',
    value: '',
  },

  settingDefaultStateTimezone: {
    id: '',
    type: 'default',
    key: 'default_state_timezone',
    value: '',
  },

  settingDefaultParkingType: {
    id: '',
    type: 'default',
    key: 'default_parking_type',
    value: [],
  },

  settingDefaultState: {
    id: '',
    type: 'default',
    key: 'default_state',
    value: [],
  },

  settingDefaultCustomerType: {
    id: '',
    type: 'default',
    key: 'default_customer_type',
    value: [],
  },
  settingDefaultCustomerRole: {
    id: '',
    type: 'default',
    key: 'default_customer_role',
    value: [],
  },

  settingServiceCodePrefix: {
    id: '',
    type: 'service',
    key: 'service_code_prefix',
    value: '',
  },

  settingServiceCodeSuffix: {
    id: '',
    type: 'service',
    key: 'service_code_suffix',
    value: '',
  },

  settingServiceStatePriceRate: {
    id: '',
    type: 'service',
    key: 'service_state_price_rate',
    value: [],
  },

  settingTechnicianWorkingSchedule: {
    id: '',
    type: 'technician',
    key: 'technician_working_schedule',
    value: [],
  },

  settingPaymentCodePrefix: {
    id: '',
    type: 'payment',
    key: 'payment_code_prefix',
    value: '',
  },

  settingPaymentCodeSuffix: {
    id: '',
    type: 'payment',
    key: 'payment_code_suffix',
    value: '',
  },
  settingPaymentCardSurcharge: {
    id: '',
    type: 'payment',
    key: 'payment_card_surcharge',
    value: [],
  },

  settingCustomerReferralCodePrefix: {
    id: '',
    type: 'customer',
    key: 'customer_referral_code_prefix',
    value: '',
  },

  settingCustomerReferralCodeSuffix: {
    id: '',
    type: 'customer',
    key: 'customer_referral_code_suffix',
    value: '',
  },

  settingAppointmentReferencePrefix: {
    id: '',
    type: 'appointment',
    key: 'appointment_reference_prefix',
    value: '',
  },
  settingAppointmentOnlineAppointmentWithoutPaymentStatus: {
    id: '',
    type: 'appointment',
    key: 'appointment_online_appointment_without_payment_status',
    value: "0",

  },

  settingAppointmentReferenceSuffix: {
    id: '',
    type: 'appointment',
    key: 'appointment_reference_suffix',
    value: '',
  },

  settingAppointmentStatus: {
    id: '',
    type: 'appointment',
    key: 'appointment_status',
    value: [],
  },

  settingAppointmentServicePlatform: {
    id: '',
    type: 'appointment',
    key: 'appointment_service_platform',
    value: [],
  },

  settingAppointmentNoteType: {
    id: '',
    type: 'appointment',
    key: 'appointment_note_type',
    value: [],
  },

  settingAppointmentOnlineAppointmentStatus: {
    id: '',
    type: 'appointment',
    key: 'appointment_online_appointment_status',
    value: '',
  },

  settingAppointmentSameDaySurcharge: {
    id: '',
    type: 'appointment',
    key: 'appointment_same_day_surcharge',
    value: [],
  },

  settingAppointmentTimebaseSurcharge: {
    id: '',
    type: 'appointment',
    key: 'appointment_timebase_surcharge',
    value: [],
  },

  settingAppointmentDistanceSurCharge: {
    id: '',
    type: 'appointment',
    key: 'appointment_distance_surcharge',
    value: [],
  },

  settingAppointmentHolidaySurcharge: {
    id: '',
    type: 'appointment',
    key: 'appointment_holiday_surcharge',
    value: [],
  },

  settingAppointmentWeekendSurcharge: {
    id: '',
    type: 'appointment',
    key: 'appointment_weekend_surcharge',
    value: [],
  },

  settingAppointmentFirstAppointmentDiscount: {
    id: '',
    type: 'appointment',
    key: 'appointment_first_appointment_discount',
    value: [],
  },

  settingAppointmentCancellationPolicy: {
    id: '',
    type: 'appointment',
    key: 'appointment_cancellation_policy',
    value: [],
  },

  settingAppointmentRefundPolicy: {
    id: '',
    type: 'appointment',
    key: 'appointment_refund_policy',
    value: [],
  },

  settingAppointmentCreditedPolicy: {
    id: '',
    type: 'appointment',
    key: 'appointment_credited_policy',
    value: [],
  },
  settingAppointmentReschedulePolicy: {
    id: '',
    type: 'appointment',
    key: 'appointment_reschedule_policy',
    value: [],
  },

  settingOrderOrderNumberPrefix: {
    id: '',
    type: 'order',
    key: 'order_order_number_prefix',
    value: '',
  },

  settingOrderOrderNumberSuffix: {
    id: '',
    type: 'order',
    key: 'order_order_number_suffix',
    value: '',
  },
  settingOrderDeliveryCharge: {
    id: '',
    type: 'order',
    key: 'order_delivery_charge',
    value: '',
  },
  settingOrderRegisteredAddresses: {
    id: '',
    type: 'order',
    key: 'order_registered_addresses',
    value: '',
  },
  settingOrderOnSiteMaximumDistance: {
    id: '',
    type: 'order',
    key: 'order_on_site_maximum_distance',
    value: '',
  },
  settingOrderCreationEmailNotifyForSystem: {
    id: '',
    type: 'order',
    key: 'order_creation_email_notify_for_system',
    value: '',
  },

  settingOrderCreationEmailNotifyForCustomer: {
    id: '',
    type: 'order',
    key: 'order_creation_email_notify_for_customer',
    value: '',
  },

  settingOrderStatusUpdateEmailNotifyForSystem: {
    id: '',
    type: 'order',
    key: 'order_status_update_email_notify_for_system',
    value: '',
  },
  settingOrderStatusUpdateEmailNotifyForCustomer: {
    id: '',
    type: 'order',
    key: 'order_status_update_email_notify_for_customer',
    value: '',
  },

  settingProductProductCodePrefix: {
    id: '',
    type: 'product',
    key: 'product_code_prefix',
    value: '',
  },

  settingProductProductCodeSuffix: {
    id: '',
    type: 'product',
    key: 'product_code_suffix',
    value: '',
  },

  settingProductItemCondition: {
    id: '',
    type: 'product_item',
    key: 'product_item_condition',
    value: [],
  },

  settingAppointmentServiceDuration: {
    id: '',
    type: 'appointment',
    key: 'appointment_service_duration',
    value: '',
  },

  settingAppointmentOnSiteMaximumDistance: {
    id: '',
    type: 'appointment',
    key: 'appointment_on_site_maximum_distance',
    value: '',
  },

  settingAppointmentRegisteredAddresses: {
    id: '',
    type: 'appointment',
    key: 'appointment_registered_addresses',
    value: [],
  },

  settingAppointmentCreationEmailNotifyForSystem: {
    id: '',
    type: 'appointment',
    key: 'appointment_creation_email_notify_for_system',
    value: [],
  },
  settingAppointmentCreationEmailNotifyForTechnician: {
    id: '',
    type: 'appointment',
    key: 'appointment_creation_email_notify_for_technician',
    value: [],
  },
  settingAppointmentCreationEmailNotifyForCustomer: {
    id: '',
    type: 'appointment',
    key: 'appointment_creation_email_notify_for_customer',
    value: [],
  },

  settingAppointmentStatusUpdateEmailNotifyForTechnician: {
    id: '',
    type: 'appointment',
    key: 'appointment_status_update_email_notify_for_technician',
    value: '',
  },
  settingAppointmentStatusUpdateEmailNotifyForCustomer: {
    id: '',
    type: 'appointment',
    key: 'appointment_status_update_email_notify_for_customer',
    value: '',
  },

  settingAppointmentOnlineAppointmentDiscount: {
    id: '',
    type: 'appointment',
    key: 'appointment_online_appointment_discount',
    value: [],
  },
  settingGoogleMapDistanceMatrixApiKey: {
    id: '',
    type: 'google_map',
    key: 'google_map_distance_matrix_api_key',
    value: '',
  },
  settingGoogleMapDistanceMatrixApiEndpoint: {
    id: '',
    type: 'google_map',
    key: 'google_map_distance_matrix_api_endpoint',
    value: '',
  },
  settingLeaveApplicationType: {
    id: '',
    type: 'leave_application',
    key: 'leave_application_type',
    value: [],
  },
  settingLeaveApplicationStatus: {
    id: '',
    type: 'leave_application',
    key: 'leave_application_status',
    value: [],
  },
  settingDefaultGstRate: {
    id: '',
    type: 'default',
    key: 'default_gst_rate',
    value: [],
  },
  settingOrderStatus: {
    id: '',
    type: 'order',
    key: 'order_status',
    value: [],
  },
  settingOrderNoteType: {
    id: '',
    type: 'order',
    key: 'order_note_type',
    value: [],
  },
  settingRefundNoteType: {
    id: '',
    type: 'refund',
    key: 'refund_note_type',
    value: [],
  },

  settingVacancyApplyEmailAddress: {
    id: '',
    type: 'vacancy',
    key: 'vacancy_apply_email_address',
    value: '',
  },

  settingDefaultCompanyName: {
    id: '',
    type: 'default',
    key: 'default_company_name',
    value: '',
  },
  settingDefaultCompanyABN: {
    id: '',
    type: 'default',
    key: 'default_company_abn',
    value: '',
  },
  settingAppointmentOnlineAppointmentTermsAndConditions: {
    id: '',
    type: 'appointment',
    key: 'appointment_online_appointment_terms_and_conditions',
    value: '',
  },
  settingContactRequestForList: {
    id: '',
    type: 'contact',
    key: 'contact_request_for_list',
    value: '',
  },
  settingPaymentAfterPayPaymentStatus: {
    id: '',
    type: 'payment',
    key: 'payment_afterpay_payment_status',
    value: 0,

  },
  settingPaymentCardPaymentStatus: {
    id: '',
    type: 'payment',
    key: 'payment_card_payment_status',
    value: 0,

  },
  settingPaymentCashPaymentStatus: {
    id: '',
    type: 'payment',
    key: 'payment_cash_payment_status',
    value: 0,

  },
  settingPaymentEftPaymentStatus: {
    id: '',
    type: 'payment',
    key: 'payment_eft_payment_status',
    value: 0,
  },
  settingDefaultCustomerMobApp: {
    id: '',
    type: 'default',
    key: 'default_customer_mob_app',
    value: 0,
  },
  settingDefaultWebsiteHeaderBannerSlider: {
    id: '',
    type: 'default',
    key: 'default_website_header_banner_slider',
    value: {},
  },
  settingDefaultWebsiteMedicalServicePageUrl: {
    id: '',
    type: 'default',
    key: 'default_website_medical_service_page_url',
    value: '',
  },
  settingDefaultWebsiteNdisPageUrl: {
    id: '',
    type: 'default',
    key: 'default_website_ndis_page_url',
    value: '',
  },
});


export const getters = {
  settingDefaultWebsiteCustomerPortalLoginUrl(state) {
    return state.settingDefaultWebsiteCustomerPortalLoginUrl;
  },
  settingDefaultPagination(state) {
    return state.settingDefaultPagination;
  },
  settingDefaultWebsiteUrl(state) {
    return state.settingDefaultWebsiteUrl;
  },
  settingDefaultCompanySocialLinkFacebook(state) {
    return state.settingDefaultCompanySocialLinkFacebook;
  },
  settingDefaultCompanySocialLinkLinkedin(state) {
    return state.settingDefaultCompanySocialLinkLinkedin;
  },
  settingDefaultCompanySocialLinkYoutube(state) {
    return state.settingDefaultCompanySocialLinkYoutube;
  },
  settingDefaultWebsiteLogoRegular(state) {
    return state.settingDefaultWebsiteLogoRegular;
  },
  settingDefaultContactNumber(state) {
    return state.settingDefaultContactNumber;
  },
  settingDefaultStateTimezone(state) {
    return state.settingDefaultStateTimezone;
  },

  settingDefaultParkingType(state) {
    return state.settingDefaultParkingType;
  },

  settingDefaultState(state) {
    return state.settingDefaultState;
  },

  settingDefaultCustomerType(state) {
    return state.settingDefaultCustomerType;
  },
  settingDefaultCustomerRole(state) {
    return state.settingDefaultCustomerRole;
  },

  settingServiceCodePrefix(state) {
    return state.settingServiceCodePrefix;
  },

  settingServiceCodeSuffix(state) {
    return state.settingServiceCodeSuffix;
  },

  settingServiceStatePriceRate(state) {
    return state.settingServiceStatePriceRate;
  },

  settingTechnicianWorkingSchedule(state) {
    return state.settingTechnicianWorkingSchedule;
  },

  settingPaymentCodePrefix(state) {
    return state.settingPaymentCodePrefix;
  },

  settingPaymentCodeSuffix(state) {
    return state.settingPaymentCodeSuffix;
  },

  settingCustomerReferralCodePrefix(state) {
    return state.settingCustomerReferralCodePrefix;
  },

  settingCustomerReferralCodeSuffix(state) {
    return state.settingCustomerReferralCodeSuffix;
  },

  settingAppointmentReferencePrefix(state) {
    return state.settingAppointmentReferencePrefix;
  },

  settingAppointmentReferenceSuffix(state) {
    return state.settingAppointmentReferenceSuffix;
  },
  settingAppointmentOnlineAppointmentWithoutPaymentStatus(state) {
    return state.settingAppointmentOnlineAppointmentWithoutPaymentStatus;
  },

  settingAppointmentStatus(state) {
    return state.settingAppointmentStatus;
  },

  settingAppointmentServicePlatform(state) {
    return state.settingAppointmentServicePlatform;
  },

  settingAppointmentNoteType(state) {
    return state.settingAppointmentNoteType;
  },

  settingAppointmentOnlineAppointmentStatus(state) {
    return state.settingAppointmentOnlineAppointmentStatus;
  },

  settingAppointmentSameDaySurcharge(state) {
    return state.settingAppointmentSameDaySurcharge;
  },

  settingAppointmentTimebaseSurcharge(state) {
    return state.settingAppointmentTimebaseSurcharge;
  },

  settingAppointmentDistanceSurCharge(state) {
    return state.settingAppointmentDistanceSurCharge;
  },

  settingAppointmentHolidaySurcharge(state) {
    return state.settingAppointmentHolidaySurcharge;
  },

  settingAppointmentWeekendSurcharge(state) {
    return state.settingAppointmentWeekendSurcharge;
  },

  settingAppointmentFirstAppointmentDiscount(state) {
    return state.settingAppointmentFirstAppointmentDiscount;
  },
  settingAppointmentCreationEmailNotifyForSystem(state) {
    return state.settingAppointmentCreationEmailNotifyForSystem;
  },
  settingAppointmentCreationEmailNotifyForTechnician(state) {
    return state.settingAppointmentCreationEmailNotifyForTechnician;
  },
  settingAppointmentCreationEmailNotifyForCustomer(state) {
    return state.settingAppointmentCreationEmailNotifyForCustomer;
  },
  settingAppointmentStatusUpdateEmailNotifyForTechnician(state) {
    return state.settingAppointmentStatusUpdateEmailNotifyForTechnician;
  },
  settingAppointmentStatusUpdateEmailNotifyForCustomer(state) {
    return state.settingAppointmentStatusUpdateEmailNotifyForCustomer;
  },
  settingAppointmentOnlineAppointmentDiscount(state) {
    return state.settingAppointmentOnlineAppointmentDiscount;
  },

  settingAppointmentCancellationPolicy(state) {
    return state.settingAppointmentCancellationPolicy;
  },

  settingAppointmentRefundPolicy(state) {
    return state.settingAppointmentRefundPolicy;
  },

  settingAppointmentCreditedPolicy(state) {
    return state.settingAppointmentCreditedPolicy;
  },

  settingAppointmentReschedulePolicy(state) {
    return state.settingAppointmentReschedulePolicy;
  },

  settingOrderOrderNumberPrefix(state) {
    return state.settingOrderOrderNumberPrefix;
  },

  settingOrderOrderNumberSuffix(state) {
    return state.settingOrderOrderNumberSuffix;
  },
  settingOrderDeliveryCharge(state) {
    return state.settingOrderDeliveryCharge;
  },

  settingOrderRegisteredAddresses(state) {
    return state.settingOrderRegisteredAddresses;
  },
  settingOrderOnSiteMaximumDistance(state) {
    return state.settingOrderOnSiteMaximumDistance;
  },

  settingOrderCreationEmailNotifyForSystem(state) {
    return state.settingOrderCreationEmailNotifyForSystem;
  },
  settingOrderCreationEmailNotifyForCustomer(state) {
    return state.settingOrderCreationEmailNotifyForCustomer;
  },
  settingOrderStatusUpdateEmailNotifyForSystem(state) {
    return state.settingOrderStatusUpdateEmailNotifyForSystem;
  },
  settingOrderStatusUpdateEmailNotifyForCustomer(state) {
    return state.settingOrderStatusUpdateEmailNotifyForCustomer;
  },

  settingProductProductCodePrefix(state) {
    return state.settingProductProductCodePrefix;
  },

  settingProductProductCodeSuffix(state) {
    return state.settingProductProductCodeSuffix;
  },
  settingPaymentCardSurcharge(state) {
    return state.settingPaymentCardSurcharge.value;
  },

  settingProductItemCondition(state) {
    return state.settingProductItemCondition;
  },

  settingAppointmentServiceDuration(state) {
    return state.settingAppointmentServiceDuration;
  },

  settingAppointmentOnSiteMaximumDistance(state) {
    return state.settingAppointmentOnSiteMaximumDistance;
  },

  settingAppointmentRegisteredAddresses(state) {
    return state.settingAppointmentRegisteredAddresses;
  },

  settingGoogleMapDistanceMatrixApiKey(state) {
    return state.settingGoogleMapDistanceMatrixApiKey;
  },

  settingGoogleMapDistanceMatrixApiEndpoint(state) {
    return state.settingGoogleMapDistanceMatrixApiEndpoint;
  },

  settingLeaveApplicationType(state) {
    return state.settingLeaveApplicationType;
  },

  settingDefaultGstRate(state) {
    return state.settingDefaultGstRate;
  },
  settingOrderStatus(state) {
    return state.settingOrderStatus;
  },
  settingOrderNoteType(state) {
    return state.settingOrderNoteType;
  },
  settingRefundNoteType(state) {
    return state.settingRefundNoteType;
  },

  settingVacancyApplyEmailAddress(state) {
    return state.settingVacancyApplyEmailAddress;
  },
  settingDefaultCompanyName(state) {
    return state.settingDefaultCompanyName;
  },
  settingDefaultCompanyABN(state) {
    return state.settingDefaultCompanyABN;
  },

  settingAppointmentOnlineAppointmentTermsAndConditions(state) {
    return state.settingAppointmentOnlineAppointmentTermsAndConditions;
  },
  settingContactRequestForList(state) {
    return state.settingContactRequestForList;
  },
  settingPaymentAfterPayPaymentStatus(state) {
    return state.settingPaymentAfterPayPaymentStatus;
  },
  settingPaymentCardPaymentStatus(state) {
    return state.settingPaymentCardPaymentStatus;
  },
  settingPaymentCashPaymentStatus(state) {
    return state.settingPaymentCashPaymentStatus;
  },
  settingPaymentEftPaymentStatus(state) {
    return state.settingPaymentEftPaymentStatus;
  },
  settingDefaultCustomerMobApp(state) {
    return state.settingDefaultCustomerMobApp;
  },
  settingDefaultWebsiteHeaderBannerSlider(state) {
    return state.settingDefaultWebsiteHeaderBannerSlider;
  },
  settingDefaultWebsiteMedicalServicePageUrl(state) {
    return state.settingDefaultWebsiteMedicalServicePageUrl;
  },
  settingDefaultWebsiteNdisPageUrl(state) {
    return state.settingDefaultWebsiteNdisPageUrl;
  }
};


export const mutations = {
  SET_SETTING_DEFAULT_WEBSITE_CUSTOMER_PORAL_LOGIN_URL(state, setting) {
    state.settingDefaultWebsiteCustomerPortalLoginUrl.value = setting.value;
    state.settingDefaultWebsiteCustomerPortalLoginUrl.id = setting.id;
  },
  SET_SETTING_DEFAULT_PAGINATION(state, setting) {
    state.settingDefaultPagination.value = setting.value;
    state.settingDefaultPagination.id = setting.id;
  },
  SET_SETTING_DEFAULT_WEBSITE_URL(state, setting) {
    state.settingDefaultWebsiteUrl.value = setting.value;
    state.settingDefaultWebsiteUrl.id = setting.id;
  },
  SET_SETTING_DEFAULT_COMPANY_SOCIAL_LINK_FACEBOOK(state, setting) {
    state.settingDefaultCompanySocialLinkFacebook.value = setting.value;
    state.settingDefaultCompanySocialLinkFacebook.id = setting.id;
  },
  SET_SETTING_DEFAULT_COMPANY_SOCIAL_LINK_LINKEDIN(state, setting) {
    state.settingDefaultCompanySocialLinkLinkedin.value = setting.value;
    state.settingDefaultCompanySocialLinkLinkedin.id = setting.id;
  },
  SET_SETTING_DEFAULT_COMPANY_SOCIAL_LINK_YOUTUBE(state, setting) {
    state.settingDefaultCompanySocialLinkYoutube.value = setting.value;
    state.settingDefaultCompanySocialLinkYoutube.id = setting.id;
  },
  SET_SETTING_DEFAULT_WEBSITE_LOGO_REGULAR(state, setting) {
    state.settingDefaultWebsiteLogoRegular.value = setting.value;
    state.settingDefaultWebsiteLogoRegular.id = setting.id;
  },
  // settingDefaultContactNumber
  SET_SETTING_DEFAULT_CONTACT_NUMBER(state, setting) {
    state.settingDefaultContactNumber.value = setting.value;
    state.settingDefaultContactNumber.id = setting.id;
  },
  SET_SETTING_DEFAULT_STATE_TIMEZONE(state, setting) {
    state.settingDefaultStateTimezone.id = setting.id;
    state.settingDefaultStateTimezone.value = setting.value;
  },

  SET_SETTING_DEFAULT_PARKING_TYPE(state, setting) {
    state.settingDefaultParkingType.id = setting.id;
    state.settingDefaultParkingType.value = setting.value;
  },

  SET_SETTING_DEFAULT_STATE(state, setting) {
    state.settingDefaultState.id = setting.id;
    state.settingDefaultState.value = setting.value;
  },

  SET_SETTING_DEFAULT_CUSTOMER_TYPE(state, setting) {
    state.settingDefaultCustomerType.id = setting.id;
    state.settingDefaultCustomerType.value = setting.value;
  },
  SET_SETTING_DEFAULT_CUSTOMER_ROLE(state, setting) {
    state.settingDefaultCustomerRole.id = setting.id;
    state.settingDefaultCustomerRole.value = setting.value;
  },

  SET_SETTING_SERVICE_CODE_PREFIX(state, setting) {
    state.settingServiceCodePrefix.id = setting.id;
    state.settingServiceCodePrefix.value = setting.value;
  },

  SET_SETTING_SERVICE_CODE_SUFFIX(state, setting) {
    state.settingServiceCodeSuffix.id = setting.id;
    state.settingServiceCodeSuffix.value = setting.value;
  },

  SET_SETTING_SERVICE_STATE_PRICE_RATE(state, setting) {
    state.settingServiceStatePriceRate.id = setting.id;
    state.settingServiceStatePriceRate.value = setting.value;
  },

  SET_SETTING_TECHNICIAN_WORKING_SCHEDULE(state, setting) {
    state.settingTechnicianWorkingSchedule.id = setting.id;
    state.settingTechnicianWorkingSchedule.value = setting.value;
  },

  SET_SETTING_PAYMENT_CODE_PREFIX(state, setting) {
    state.settingPaymentCodePrefix.id = setting.id;
    state.settingPaymentCodePrefix.value = setting.value;
  },

  SET_SETTING_PAYMENT_CODE_SUFFIX(state, setting) {
    state.settingPaymentCodeSuffix.id = setting.id;
    state.settingPaymentCodeSuffix.value = setting.value;
  },

  SET_SETTING_PAYMENT_CARD_SURCHARGE(state, setting) {
    state.settingPaymentCardSurcharge.id = setting.id;
    state.settingPaymentCardSurcharge.value = setting.value.status === 1 ? setting.value.details : []; // TODO: we have to change this state value property orientation
  },

  SET_SETTING_CUSTOMER_REFERRAL_CODE_PREFIX(state, setting) {
    state.settingCustomerReferralCodePrefix.id = setting.id;
    state.settingCustomerReferralCodePrefix.value = setting.value;
  },

  SET_SETTING_CUSTOMER_REFERRAL_CODE_SUFFIX(state, setting) {
    state.settingCustomerReferralCodeSuffix.id = setting.id;
    state.settingCustomerReferralCodeSuffix.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_REFERENCE_PREFIX(state, setting) {
    state.settingAppointmentReferencePrefix.id = setting.id;
    state.settingAppointmentReferencePrefix.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_REFERENCE_SUFFIX(state, setting) {
    state.settingAppointmentReferenceSuffix.id = setting.id;
    state.settingAppointmentReferenceSuffix.value = setting.value;
  },
  SET_SETTING_ONLINE_APPOINTMENT_WITHOUT_PAYMENTS_STATUS(state, setting) {
    state.settingAppointmentOnlineAppointmentWithoutPaymentStatus.id = setting.id;
    state.settingAppointmentOnlineAppointmentWithoutPaymentStatus.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_STATUS(state, setting) {
    state.settingAppointmentStatus.id = setting.id;
    state.settingAppointmentStatus.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_SERVICE_PLATFORM(state, setting) {
    state.settingAppointmentServicePlatform.id = setting.id;
    state.settingAppointmentServicePlatform.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_NOTE_TYPE(state, setting) {
    state.settingAppointmentNoteType.id = setting.id;
    state.settingAppointmentNoteType.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_ONLINE_APPOINTMENT_STATUS(state, setting) {
    state.settingAppointmentOnlineAppointmentStatus.id = setting.id;
    state.settingAppointmentOnlineAppointmentStatus.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_SAME_DAY_SURCHARGE(state, setting) {
    state.settingAppointmentSameDaySurcharge.id = setting.id;
    state.settingAppointmentSameDaySurcharge.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_TIMEBASE_SURCHARGE(state, setting) {

    state.settingAppointmentTimebaseSurcharge.id = setting.id;
    state.settingAppointmentTimebaseSurcharge.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_DISTANCE_SURCHARGE(state, setting) {
    state.settingAppointmentDistanceSurCharge.id = setting.id;
    state.settingAppointmentDistanceSurCharge.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_HOLIDAY_SURCHARGE(state, setting) {
    state.settingAppointmentHolidaySurcharge.id = setting.id;
    state.settingAppointmentHolidaySurcharge.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_WEEKEND_SURCHARGE(state, setting) {
    state.settingAppointmentWeekendSurcharge.id = setting.id;
    state.settingAppointmentWeekendSurcharge.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_FIRST_APPOINTMENT_DISCOUNT(state, setting) {
    state.settingAppointmentFirstAppointmentDiscount.id = setting.id;
    state.settingAppointmentFirstAppointmentDiscount.value = setting.value;
  },
  SET_SETTING_APPOINTMENT_ONLINE_APPOINTMENT_DISCOUNT(state, setting) {
    state.settingAppointmentOnlineAppointmentDiscount.id = setting.id;
    state.settingAppointmentOnlineAppointmentDiscount.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_CREATION_EMAIL_NOTIFY_FOR_SYSTEM(state, setting) {

    state.settingAppointmentCreationEmailNotifyForSystem.id = setting.id;
    let { recipients, cc_recipients, bcc_recipients } = setting.value;
    let recipientsArrayOfObj = [];
    let ccRecipientsArrayOfObj = [];
    let bccRecipientsArrayOfObj = [];
    if (recipients.length > 0) {
      recipients.map((currentValue) => {
        recipientsArrayOfObj.push({
          key: currentValue,
          value: currentValue
        })
      })
    }
    if (cc_recipients.length > 0) {
      cc_recipients.map((currentValue) => {
        ccRecipientsArrayOfObj.push({
          key: currentValue,
          value: currentValue
        })
      })
    }
    if (bcc_recipients.length > 0) {
      bcc_recipients.map((currentValue) => {
        bccRecipientsArrayOfObj.push({
          key: currentValue,
          value: currentValue
        })
      })
    }


    state.settingAppointmentCreationEmailNotifyForSystem.value = {
      ...setting.value, recipients: recipientsArrayOfObj, cc_recipients: ccRecipientsArrayOfObj,
      bcc_recipients: bccRecipientsArrayOfObj
    };
  },


  SET_SETTING_APPOINTMENT_CREATION_EMAIL_NOTIFY_FOR_TECHNICIAN(state, setting) {

    state.settingAppointmentCreationEmailNotifyForTechnician.id = setting.id;
    let { cc_recipients, bcc_recipients } = setting.value;

    let ccRecipientsArrayOfObj = [];
    let bccRecipientsArrayOfObj = [];

    if (cc_recipients.length > 0) {
      cc_recipients.map((currentValue) => {
        ccRecipientsArrayOfObj.push({
          key: currentValue,
          value: currentValue
        })
      })
    }
    if (bcc_recipients.length > 0) {
      bcc_recipients.map((currentValue) => {
        bccRecipientsArrayOfObj.push({
          key: currentValue,
          value: currentValue
        })
      })
    }


    state.settingAppointmentCreationEmailNotifyForTechnician.value = {
      ...setting.value, cc_recipients: ccRecipientsArrayOfObj,
      bcc_recipients: bccRecipientsArrayOfObj
    };
  },
  SET_SETTING_APPOINTMENT_CREATION_EMAIL_NOTIFY_FOR_CUSTOMER(state, setting) {

    state.settingAppointmentCreationEmailNotifyForCustomer.id = setting.id;
    let { cc_recipients, bcc_recipients } = setting.value;

    let ccRecipientsArrayOfObj = [];
    let bccRecipientsArrayOfObj = [];

    if (cc_recipients.length > 0) {
      cc_recipients.map((currentValue) => {
        ccRecipientsArrayOfObj.push({
          key: currentValue,
          value: currentValue
        })
      })
    }
    if (bcc_recipients.length > 0) {
      bcc_recipients.map((currentValue) => {
        bccRecipientsArrayOfObj.push({
          key: currentValue,
          value: currentValue
        })
      })
    }


    state.settingAppointmentCreationEmailNotifyForCustomer.value = {
      ...setting.value, cc_recipients: ccRecipientsArrayOfObj,
      bcc_recipients: bccRecipientsArrayOfObj
    };
  },
  SET_SETTING_APPOINTMENT_CREATION_EMAIL_NOTIFY_CUSTOMER(state, setting) {

    state.settingAppointmentCreationEmailNotifyCustomer.id = setting.id;
    let { cc_recipients, bcc_recipients } = setting.value;

    let ccRecipientsArrayOfObj = [];
    let bccRecipientsArrayOfObj = [];

    if (cc_recipients.length > 0) {
      cc_recipients.map((currentValue) => {
        ccRecipientsArrayOfObj.push({
          key: currentValue,
          value: currentValue
        })
      })
    }
    if (bcc_recipients.length > 0) {
      bcc_recipients.map((currentValue) => {
        bccRecipientsArrayOfObj.push({
          key: currentValue,
          value: currentValue
        })
      })
    }


    state.settingAppointmentCreationEmailNotifyCustomer.value = {
      ...setting.value, cc_recipients: ccRecipientsArrayOfObj,
      bcc_recipients: bccRecipientsArrayOfObj
    };
  },

  SET_SETTING_APPOINTMENT_STATUS_UPDATE_EMAIL_NOTIFY_FOR_TECHNICIAN(state, setting) {

    state.settingAppointmentStatusUpdateEmailNotifyForTechnician.id = setting.id;
    let { cc_recipients, bcc_recipients } = setting.value;

    let ccRecipientsArrayOfObj = [];
    let bccRecipientsArrayOfObj = [];




    cc_recipients.map((currentValue) => {
      ccRecipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })


    bcc_recipients.map((currentValue) => {
      bccRecipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })



    state.settingAppointmentStatusUpdateEmailNotifyForTechnician.value = {
      ...setting.value, cc_recipients: ccRecipientsArrayOfObj,
      bcc_recipients: bccRecipientsArrayOfObj
    };



  },
  SET_SETTING_APPOINTMENT_STATUS_UPDATE_EMAIL_NOTIFY_FOR_CUSTOMER(state, setting) {

    state.settingAppointmentStatusUpdateEmailNotifyForCustomer.id = setting.id;
    let { cc_recipients, bcc_recipients } = setting.value;

    let ccRecipientsArrayOfObj = [];
    let bccRecipientsArrayOfObj = [];




    cc_recipients.map((currentValue) => {
      ccRecipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })


    bcc_recipients.map((currentValue) => {
      bccRecipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })



    state.settingAppointmentStatusUpdateEmailNotifyForCustomer.value = {
      ...setting.value, cc_recipients: ccRecipientsArrayOfObj,
      bcc_recipients: bccRecipientsArrayOfObj
    };



  },

  SET_SETTING_APPOINTMENT_CANCELLATION_POLICY(state, setting) {
    state.settingAppointmentCancellationPolicy.id = setting.id;
    state.settingAppointmentCancellationPolicy.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_REFUND_POLICY(state, setting) {
    state.settingAppointmentRefundPolicy.id = setting.id;
    state.settingAppointmentRefundPolicy.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_CREDITED_POLICY(state, setting) {
    state.settingAppointmentCreditedPolicy.id = setting.id;
    state.settingAppointmentCreditedPolicy.value = setting.value;
  },
  SET_SETTING_APPOINTMENT_RESCHEDULE_POLICY(state, setting) {
    state.settingAppointmentReschedulePolicy.id = setting.id;
    state.settingAppointmentReschedulePolicy.value = setting.value;
  },

  SET_SETTING_ORDER_ORDER_NUMBER_PREFIX(state, setting) {
    state.settingOrderOrderNumberPrefix.id = setting.id;
    state.settingOrderOrderNumberPrefix.value = setting.value;
  },

  SET_SETTING_ORDER_ORDER_NUMBER_SUFFIX(state, setting) {
    state.settingOrderOrderNumberSuffix.id = setting.id;
    state.settingOrderOrderNumberSuffix.value = setting.value;
  },

  SET_SETTING_ORDER_DELIVERY_CHARGE(state, setting) {
    state.settingOrderDeliveryCharge.id = setting.id;
    state.settingOrderDeliveryCharge.value = setting.value;
  },
  SET_SETTING_ORDER_REGISTERED_ADDRESSES(state, setting) {

    setting.value.map((currentValue) => {
      currentValue.addresses.forEach((item, index) => {

        currentValue.addresses[index] = {
          key: item,
          value: item
        }
      })
    })

    state.settingOrderRegisteredAddresses.id = setting.id;
    state.settingOrderRegisteredAddresses.value = setting.value;
  },
  SET_SETTING_ORDER_ON_SITE_MAXIMUM_DISTANCE(state, setting) {

    state.settingOrderOnSiteMaximumDistance.id = setting.id;
    state.settingOrderOnSiteMaximumDistance.value = setting.value;
  },
  SET_SETTING_ORDER_CREATION_EMAIL_NOTIFY_FOR_SYSTEM(state, setting) {

    state.settingOrderCreationEmailNotifyForSystem.id = setting.id;
    let { recipients, cc_recipients, bcc_recipients } = setting.value;
    let recipientsArrayOfObj = [];
    let ccRecipientsArrayOfObj = [];
    let bccRecipientsArrayOfObj = [];

    recipients.map((currentValue) => {
      recipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })


    cc_recipients.map((currentValue) => {
      ccRecipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })


    bcc_recipients.map((currentValue) => {
      bccRecipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })



    state.settingOrderCreationEmailNotifyForSystem.value = {
      ...setting.value, recipients: recipientsArrayOfObj, cc_recipients: ccRecipientsArrayOfObj,
      bcc_recipients: bccRecipientsArrayOfObj
    };



  },
  SET_SETTING_ORDER_STATUS_UPDATE_EMAIL_NOTIFY_FOR_SYSTEM(state, setting) {

    state.settingOrderStatusUpdateEmailNotifyForSystem.id = setting.id;
    let { recipients, cc_recipients, bcc_recipients } = setting.value;
    let recipientsArrayOfObj = [];
    let ccRecipientsArrayOfObj = [];
    let bccRecipientsArrayOfObj = [];

    recipients.map((currentValue) => {
      recipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })


    cc_recipients.map((currentValue) => {
      ccRecipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })


    bcc_recipients.map((currentValue) => {
      bccRecipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })



    state.settingOrderStatusUpdateEmailNotifyForSystem.value = {
      ...setting.value, recipients: recipientsArrayOfObj, cc_recipients: ccRecipientsArrayOfObj,
      bcc_recipients: bccRecipientsArrayOfObj
    };



  },
  SET_SETTING_ORDER_STATUS_UPDATE_EMAIL_NOTIFY_FOR_CUSTOMER(state, setting) {

    state.settingOrderStatusUpdateEmailNotifyForCustomer.id = setting.id;
    let { cc_recipients, bcc_recipients } = setting.value;

    let ccRecipientsArrayOfObj = [];
    let bccRecipientsArrayOfObj = [];




    cc_recipients.map((currentValue) => {
      ccRecipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })


    bcc_recipients.map((currentValue) => {
      bccRecipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })



    state.settingOrderStatusUpdateEmailNotifyForCustomer.value = {
      ...setting.value, cc_recipients: ccRecipientsArrayOfObj,
      bcc_recipients: bccRecipientsArrayOfObj
    };



  },

  SET_SETTING_ORDER_CREATION_EMAIL_NOTIFY_FOR_CUSTOMER(state, setting) {

    state.settingOrderCreationEmailNotifyForCustomer.id = setting.id;
    let { cc_recipients, bcc_recipients } = setting.value;

    let ccRecipientsArrayOfObj = [];
    let bccRecipientsArrayOfObj = [];

    cc_recipients.map((currentValue) => {
      ccRecipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })


    bcc_recipients.map((currentValue) => {
      bccRecipientsArrayOfObj.push({
        key: currentValue,
        value: currentValue
      })
    })



    state.settingOrderCreationEmailNotifyForCustomer.value = {
      ...setting.value, cc_recipients: ccRecipientsArrayOfObj,
      bcc_recipients: bccRecipientsArrayOfObj
    };



  },

  SET_SETTING_PRODUCT_PRODUCT_CODE_PREFIX(state, setting) {
    state.settingProductProductCodePrefix.id = setting.id;
    state.settingProductProductCodePrefix.value = setting.value;
  },


  SET_SETTING_PRODUCT_PRODUCT_CODE_SUFFIX(state, setting) {
    state.settingProductProductCodeSuffix.id = setting.id;
    state.settingProductProductCodeSuffix.value = setting.value;
  },

  SET_SETTING_PRODUCT_ITEM_CONDITION(state, setting) {
    state.settingProductItemCondition.id = setting.id;
    state.settingProductItemCondition.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_SERVICE_DURATION(state, setting) {
    state.settingAppointmentServiceDuration.id = setting.id;
    state.settingAppointmentServiceDuration.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_ON_SITE_MAXIMUM_DISTANCE(state, setting) {
    state.settingAppointmentOnSiteMaximumDistance.id = setting.id;
    state.settingAppointmentOnSiteMaximumDistance.value = setting.value;
  },

  SET_SETTING_APPOINTMENT_REGISTERED_ADDRESSES(state, setting) {
    state.settingAppointmentRegisteredAddresses.id = setting.id;
    state.settingAppointmentRegisteredAddresses.value = setting.value;
  },

  SET_SETTING_GOOGLE_MAP_DISTANCE_MATRIX_API_KEY(state, setting) {
    state.settingGoogleMapDistanceMatrixApiKey.id = setting.id;
    state.settingGoogleMapDistanceMatrixApiKey.value = setting.value;
  },

  SET_SETTING_GOOGLE_MAP_DISTANCE_MATRIX_API_ENDPOINT(state, setting) {
    state.settingGoogleMapDistanceMatrixApiEndpoint.id = setting.id;
    state.settingGoogleMapDistanceMatrixApiEndpoint.value = setting.value;
  },

  SET_SETTING_LEAVE_APPLICATION_TYPE(state, setting) {
    state.settingLeaveApplicationType.id = setting.id;
    state.settingLeaveApplicationType.value = setting.value;
  },

  SET_SETTING_LEAVE_APPLICATION_STATUS(state, setting) {
    state.settingLeaveApplicationStatus.id = setting.id;
    state.settingLeaveApplicationStatus.value = setting.value;
  },
  SET_SETTING_DEFAULT_GST_RATE(state, setting) {
    state.settingDefaultGstRate.id = setting.id;
    state.settingDefaultGstRate.value = setting.value;
  },
  SET_SETTING_ORDER_STATUS(state, setting) {
    state.settingOrderStatus.id = setting.id;
    state.settingOrderStatus.value = setting.value;
  },
  SET_SETTING_ORDER_NOTE_TYPE(state, setting) {
    state.settingOrderNoteType.value = setting.value;
  },
  SET_SETTING_REFUND_NOTE_TYPE(state, setting) {
    state.settingRefundNoteType.value = setting.value;
  },

  SET_SETTING_VACANCY_APPLY_EMAIL_ADDRESS(state, setting) {
    state.settingVacancyApplyEmailAddress.value = setting.value;
    state.settingVacancyApplyEmailAddress.id = setting.id;
  },
  SET_SETTING_DEFAULT_COMPANY_NAME(state, setting) {
    state.settingDefaultCompanyName.value = setting.value;
    state.settingDefaultCompanyName.id = setting.id;
  },
  SET_SETTING_DEFAULT_COMPANY_ABN(state, setting) {
    state.settingDefaultCompanyABN.value = setting.value;
    state.settingDefaultCompanyABN.id = setting.id;
  },

  SET_SETTING_APPOINTMENT_ONLINE_APPOINTMENT_TERMS_AND_CONDITIONS(state, setting) {
    state.settingAppointmentOnlineAppointmentTermsAndConditions.value = setting.value;
    state.settingAppointmentOnlineAppointmentTermsAndConditions.id = setting.id;
  },
  SET_SETTING_CONTACT_REQUEST_FOR_LIST(state, setting) {
    state.settingContactRequestForList.value = setting.value;
    state.settingContactRequestForList.id = setting.id;
  },
  SET_SETTING_PAYMENT_AFTER_PAY_PAYMENT_STATUS(state, setting) {
    state.settingPaymentAfterPayPaymentStatus.value = setting.value;
    state.settingPaymentAfterPayPaymentStatus.id = setting.id;
  },
  SET_SETTING_PAYMENT_CARD_PAYMENT_STATUS(state, setting) {
    state.settingPaymentCardPaymentStatus.value = setting.value;
    state.settingPaymentCardPaymentStatus.id = setting.id;
  },
  SET_SETTING_PAYMENT_CASH_PAYMENT_STATUS(state, setting) {
    state.settingPaymentCashPaymentStatus.value = setting.value;
    state.settingPaymentCashPaymentStatus.id = setting.id;
  },
  SET_SETTING_PAYMENT_EFT_PAYMENT_STATUS(state, setting) {
    state.settingPaymentEftPaymentStatus.value = setting.value;
    state.settingPaymentEftPaymentStatus.id = setting.id;
  },
  SET_SETTING_DEFAULT_CUSTOMER_MOB_APP(state, setting) {
    state.settingDefaultCustomerMobApp.value = setting.value;
    state.settingDefaultCustomerMobApp.id = setting.id;
  },
  SET_SETTING_DEFAULT_WEBSITE_HEADER_BANNER_SLIDER(state, setting) {
    state.settingDefaultWebsiteHeaderBannerSlider.value = setting.value;
    state.settingDefaultWebsiteHeaderBannerSlider.id = setting.id;
  },
  SET_SETTING_DEFAULT_WEBSITE_MEDICAL_SERVICE_PAGE_URL(state, setting) {
    state.settingDefaultWebsiteMedicalServicePageUrl.value = setting.value;
    state.settingDefaultWebsiteMedicalServicePageUrl.id = setting.id;
  },
  SET_SETTING_DEFAULT_WEBSITE_NDIS_PAGE_URL(state, setting) {
    state.settingDefaultWebsiteNdisPageUrl.value = setting.value;
    state.settingDefaultWebsiteNdisPageUrl.id = setting.id;
  },
};

export const actions = {
  async getSettings({ dispatch }, params) {
    const path = `v1/settings`;

    return this.$axios.get(path, { params: params }).then((response) => {
      dispatch('commitSettings', response.data);
      return {
        message: '',
        type: 'success',
        status: response.status,
      };

    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },
  async commitSettings({ commit }, responseData) {

    responseData.data.forEach((settingObject) => {
      if (('default_website_customer_portal_login_url' in settingObject) && (settingObject.default_website_customer_portal_login_url.type === 'default')) {
        commit('SET_SETTING_DEFAULT_WEBSITE_CUSTOMER_PORAL_LOGIN_URL', settingObject.default_website_customer_portal_login_url);
      }
      if (('default_pagination' in settingObject) && (settingObject.default_pagination.type === 'default')) {
        commit('SET_SETTING_DEFAULT_PAGINATION', settingObject.default_pagination);
      }
      if (('default_website_url' in settingObject) && (settingObject.default_website_url.type === 'default')) {
        commit('SET_SETTING_DEFAULT_WEBSITE_URL', settingObject.default_website_url);
      }
      if (('default_company_social_link_facebook' in settingObject) && (settingObject.default_company_social_link_facebook.type === 'default')) {
        commit('SET_SETTING_DEFAULT_COMPANY_SOCIAL_LINK_FACEBOOK', settingObject.default_company_social_link_facebook);
      }
      if (('default_company_social_link_linkedin' in settingObject) && (settingObject.default_company_social_link_linkedin.type === 'default')) {
        commit('SET_SETTING_DEFAULT_COMPANY_SOCIAL_LINK_LINKEDIN', settingObject.default_company_social_link_linkedin);
      }
      if (('default_company_social_link_youtube' in settingObject) && (settingObject.default_company_social_link_youtube.type === 'default')) {
        commit('SET_SETTING_DEFAULT_COMPANY_SOCIAL_LINK_YOUTUBE', settingObject.default_company_social_link_youtube);
      }
      if (('default_website_logo_regular' in settingObject) && (settingObject.default_website_logo_regular.type === 'default')) {
        commit('SET_SETTING_DEFAULT_WEBSITE_LOGO_REGULAR', settingObject.default_website_logo_regular);
      }

      if (('default_contact_number' in settingObject) && (settingObject.default_contact_number.type === 'default')) {
        commit('SET_SETTING_DEFAULT_CONTACT_NUMBER', settingObject.default_contact_number);
      }
      if (('default_state_timezone' in settingObject) && (settingObject.default_state_timezone.type === 'default')) {
        commit('SET_SETTING_DEFAULT_STATE_TIMEZONE', settingObject.default_state_timezone);
      }

      if (('default_parking_type' in settingObject) && (settingObject.default_parking_type.type === 'default')) {
        commit('SET_SETTING_DEFAULT_PARKING_TYPE', settingObject.default_parking_type);
      }

      if (('default_state' in settingObject) && (settingObject.default_state.type === 'default')) {
        commit('SET_SETTING_DEFAULT_STATE', settingObject.default_state);
      }

      if (('default_customer_type' in settingObject) && (settingObject.default_customer_type.type === 'default')) {
        commit('SET_SETTING_DEFAULT_CUSTOMER_TYPE', settingObject.default_customer_type);
      }
      if (('default_customer_role' in settingObject) && (settingObject.default_customer_role.type === 'default')) {
        commit('SET_SETTING_DEFAULT_CUSTOMER_ROLE', settingObject.default_customer_role);
      }

      if (('service_code_prefix' in settingObject) && (settingObject.service_code_prefix.type === 'service')) {
        commit('SET_SETTING_SERVICE_CODE_PREFIX', settingObject.service_code_prefix);
      }
      if (('service_code_suffix' in settingObject) && (settingObject.service_code_suffix.type === 'service')) {
        commit('SET_SETTING_SERVICE_CODE_SUFFIX', settingObject.service_code_suffix);
      }

      if (('service_state_price_rate' in settingObject) && (settingObject.service_state_price_rate.type === 'service')) {
        commit('SET_SETTING_SERVICE_STATE_PRICE_RATE', settingObject.service_state_price_rate);
      }

      if (('technician_working_schedule' in settingObject) && (settingObject.technician_working_schedule.type === 'technician')) {
        commit('SET_SETTING_TECHNICIAN_WORKING_SCHEDULE', settingObject.technician_working_schedule);
      }

      if (('payment_code_prefix' in settingObject) && (settingObject.payment_code_prefix.type === 'payment')) {
        commit('SET_SETTING_PAYMENT_CODE_PREFIX', settingObject.payment_code_prefix);
      }

      if (('payment_code_suffix' in settingObject) && (settingObject.payment_code_suffix.type === 'payment')) {
        commit('SET_SETTING_PAYMENT_CODE_SUFFIX', settingObject.payment_code_suffix);
      }
      if (('payment_card_surcharge' in settingObject) && (settingObject.payment_card_surcharge.type === 'payment')) {
        commit('SET_SETTING_PAYMENT_CARD_SURCHARGE', settingObject.payment_card_surcharge);
      }

      if (('customer_referral_code_prefix' in settingObject) && (settingObject.customer_referral_code_prefix.type === 'customer')) {
        commit('SET_SETTING_CUSTOMER_REFERRAL_CODE_PREFIX', settingObject.customer_referral_code_prefix);
      }

      if (('customer_referral_code_suffix' in settingObject) && (settingObject.customer_referral_code_suffix.type === 'customer')) {
        commit('SET_SETTING_CUSTOMER_REFERRAL_CODE_SUFFIX', settingObject.customer_referral_code_suffix);
      }

      if (('appointment_reference_prefix' in settingObject) && (settingObject.appointment_reference_prefix.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_REFERENCE_PREFIX', settingObject.appointment_reference_prefix);
      }

      if (('appointment_reference_suffix' in settingObject) && (settingObject.appointment_reference_suffix.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_REFERENCE_SUFFIX', settingObject.appointment_reference_suffix);
      }

      if (('appointment_online_appointment_without_payment_status' in settingObject) && (settingObject.appointment_online_appointment_without_payment_status.type === 'appointment')) {
        commit('SET_SETTING_ONLINE_APPOINTMENT_WITHOUT_PAYMENTS_STATUS', settingObject.appointment_online_appointment_without_payment_status);
      }

      if (('appointment_status' in settingObject) && (settingObject.appointment_status.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_STATUS', settingObject.appointment_status);
      }

      if (('appointment_service_platform' in settingObject) && (settingObject.appointment_service_platform.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_SERVICE_PLATFORM', settingObject.appointment_service_platform);
      }

      if (('appointment_note_type' in settingObject) && (settingObject.appointment_note_type.type === 'appointment')) {

        commit('SET_SETTING_APPOINTMENT_NOTE_TYPE', settingObject.appointment_note_type);
      }

      if (('appointment_online_appointment_status' in settingObject) && (settingObject.appointment_online_appointment_status.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_ONLINE_APPOINTMENT_STATUS', settingObject.appointment_online_appointment_status);
      }


      if (('appointment_creation_email_notify_for_system' in settingObject) && (settingObject.appointment_creation_email_notify_for_system.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_CREATION_EMAIL_NOTIFY_FOR_SYSTEM', settingObject.appointment_creation_email_notify_for_system);
      }
      if (('appointment_creation_email_notify_for_technician' in settingObject) && (settingObject.appointment_creation_email_notify_for_technician.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_CREATION_EMAIL_NOTIFY_FOR_TECHNICIAN', settingObject.appointment_creation_email_notify_for_technician);
      }
      if (('appointment_creation_email_notify_for_customer' in settingObject) && (settingObject.appointment_creation_email_notify_for_customer.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_CREATION_EMAIL_NOTIFY_FOR_CUSTOMER', settingObject.appointment_creation_email_notify_for_customer);
      }
      if (('appointment_online_appointment_discount' in settingObject) && (settingObject.appointment_online_appointment_discount.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_ONLINE_APPOINTMENT_DISCOUNT', settingObject.appointment_online_appointment_discount);
      }
      if (('appointment_status_update_email_notify_for_technician' in settingObject) && (settingObject.appointment_status_update_email_notify_for_technician.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_STATUS_UPDATE_EMAIL_NOTIFY_FOR_TECHNICIAN', settingObject.appointment_status_update_email_notify_for_technician);
      }
      if (('appointment_status_update_email_notify_for_customer' in settingObject) && (settingObject.appointment_status_update_email_notify_for_customer.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_STATUS_UPDATE_EMAIL_NOTIFY_FOR_CUSTOMER', settingObject.appointment_status_update_email_notify_for_customer);
      }

      if (('appointment_same_day_surcharge' in settingObject) && (settingObject.appointment_same_day_surcharge.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_SAME_DAY_SURCHARGE', settingObject.appointment_same_day_surcharge);
      }
      if (('appointment_timebase_surcharge' in settingObject) && (settingObject.appointment_timebase_surcharge.type === 'appointment')) {

        commit('SET_SETTING_APPOINTMENT_TIMEBASE_SURCHARGE', settingObject.appointment_timebase_surcharge);
      }
      if (('appointment_distance_surcharge' in settingObject) && (settingObject.appointment_distance_surcharge.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_DISTANCE_SURCHARGE', settingObject.appointment_distance_surcharge);
      }
      if (('appointment_holiday_surcharge' in settingObject) && (settingObject.appointment_holiday_surcharge.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_HOLIDAY_SURCHARGE', settingObject.appointment_holiday_surcharge);
      }
      if (('appointment_weekend_surcharge' in settingObject) && (settingObject.appointment_weekend_surcharge.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_WEEKEND_SURCHARGE', settingObject.appointment_weekend_surcharge);
      }
      if (('appointment_first_appointment_discount' in settingObject) && (settingObject.appointment_first_appointment_discount.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_FIRST_APPOINTMENT_DISCOUNT', settingObject.appointment_first_appointment_discount);
      }
      if (('appointment_cancellation_policy' in settingObject) && (settingObject.appointment_cancellation_policy.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_CANCELLATION_POLICY', settingObject.appointment_cancellation_policy);
      }
      if (('appointment_refund_policy' in settingObject) && (settingObject.appointment_refund_policy.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_REFUND_POLICY', settingObject.appointment_refund_policy);
      }
      if (('appointment_credited_policy' in settingObject) && (settingObject.appointment_credited_policy.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_CREDITED_POLICY', settingObject.appointment_credited_policy);
      }
      if (('appointment_reschedule_policy' in settingObject) && (settingObject.appointment_reschedule_policy.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_RESCHEDULE_POLICY', settingObject.appointment_reschedule_policy);
      }
      if (('order_order_number_prefix' in settingObject) && (settingObject.order_order_number_prefix.type === 'order')) {
        commit('SET_SETTING_ORDER_ORDER_NUMBER_PREFIX', settingObject.order_order_number_prefix);
      }
      if (('order_order_number_suffix' in settingObject) && (settingObject.order_order_number_suffix.type === 'order')) {
        commit('SET_SETTING_ORDER_ORDER_NUMBER_SUFFIX', settingObject.order_order_number_suffix);
      }
      if (('order_delivery_charge' in settingObject) && (settingObject.order_delivery_charge.type === 'order')) {
        commit('SET_SETTING_ORDER_DELIVERY_CHARGE', settingObject.order_delivery_charge);
      }
      if (('order_registered_addresses' in settingObject) && (settingObject.order_registered_addresses.type === 'order')) {
        commit('SET_SETTING_ORDER_REGISTERED_ADDRESSES', settingObject.order_registered_addresses);
      }
      if (('order_on_site_maximum_distance' in settingObject) && (settingObject.order_on_site_maximum_distance.type === 'order')) {
        commit('SET_SETTING_ORDER_ON_SITE_MAXIMUM_DISTANCE', settingObject.order_on_site_maximum_distance);
      }
      if (('order_creation_email_notify_for_system' in settingObject) && (settingObject.order_creation_email_notify_for_system.type === 'order')) {
        commit('SET_SETTING_ORDER_CREATION_EMAIL_NOTIFY_FOR_SYSTEM', settingObject.order_creation_email_notify_for_system);
      }
      if (('order_creation_email_notify_for_customer' in settingObject) && (settingObject.order_creation_email_notify_for_customer.type === 'order')) {
        commit('SET_SETTING_ORDER_CREATION_EMAIL_NOTIFY_FOR_CUSTOMER', settingObject.order_creation_email_notify_for_customer);
      }


      if (('order_status_update_email_notify_for_system' in settingObject) && (settingObject.order_status_update_email_notify_for_system.type === 'order')) {
        commit('SET_SETTING_ORDER_STATUS_UPDATE_EMAIL_NOTIFY_FOR_SYSTEM', settingObject.order_status_update_email_notify_for_system);
      }
      if (('order_status_update_email_notify_for_customer' in settingObject) && (settingObject.order_status_update_email_notify_for_customer.type === 'order')) {
        commit('SET_SETTING_ORDER_STATUS_UPDATE_EMAIL_NOTIFY_FOR_CUSTOMER', settingObject.order_status_update_email_notify_for_customer);
      }

      if (('product_code_prefix' in settingObject) && (settingObject.product_code_prefix.type === 'product')) {
        commit('SET_SETTING_PRODUCT_PRODUCT_CODE_PREFIX', settingObject.product_code_prefix);
      }
      if (('product_code_suffix' in settingObject) && (settingObject.product_code_suffix.type === 'product')) {
        commit('SET_SETTING_PRODUCT_PRODUCT_CODE_SUFFIX', settingObject.product_code_suffix);
      }
      if (('product_item_condition' in settingObject) && (settingObject.product_item_condition.type === 'product_item')) {
        commit('SET_SETTING_PRODUCT_ITEM_CONDITION', settingObject.product_item_condition);
      }
      if (('appointment_service_duration' in settingObject) && (settingObject.appointment_service_duration.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_SERVICE_DURATION', settingObject.appointment_service_duration);
      }
      if (('appointment_on_site_maximum_distance' in settingObject) && (settingObject.appointment_on_site_maximum_distance.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_ON_SITE_MAXIMUM_DISTANCE', settingObject.appointment_on_site_maximum_distance);
      }
      if (('appointment_registered_addresses' in settingObject) && (settingObject.appointment.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_REGISTERED_ADDRESSES', settingObject.appointment_registered_addresses);
      }
      if (('google_map_distance_matrix_api_key' in settingObject) && (settingObject.appointment.type === 'google_map')) {
        commit('SET_SETTING_GOOGLE_MAP_DISTANCE_MATRIX_API_KEY', settingObject.google_map_distance_matrix_api_key);
      }
      if (('google_map_distance_matrix_api_endpoint' in settingObject) && (settingObject.appointment.type === 'google_map')) {
        commit('SET_SETTING_GOOGLE_MAP_DISTANCE_MATRIX_API_ENDPOINT', settingObject.google_map_distance_matrix_api_endpoint);
      }
      if (('leave_application_type' in settingObject) && (settingObject.appointment.type === 'leave_application')) {
        commit('SET_SETTING_LEAVE_APPLICATION_TYPE', settingObject.leave_application_type);
      }
      if (('leave_application_status' in settingObject) && (settingObject.appointment.type === 'leave_application')) {
        commit('SET_SETTING_LEAVE_APPLICATION_STATUS', settingObject.leave_application_status);
      }
      if (('default_gst_rate' in settingObject) && (settingObject.default_gst_rate.type === 'default')) {
        commit('SET_SETTING_DEFAULT_GST_RATE', settingObject.default_gst_rate);
      }
      if (('order_status' in settingObject) && (settingObject.order_status.type === 'order')) {
        commit('SET_SETTING_ORDER_STATUS', settingObject.order_status);
      }
      if (('order_note_type' in settingObject) && (settingObject.order_note_type.type === 'order')) {
        commit('SET_SETTING_ORDER_NOTE_TYPE', settingObject.order_note_type);
      }
      if (('refund_note_type' in settingObject) && (settingObject.refund_note_type.type === 'refund')) {
        commit('SET_SETTING_REFUND_NOTE_TYPE', settingObject.refund_note_type);
      }
      if (('vacancy_apply_email_address' in settingObject) && (settingObject.vacancy_apply_email_address.type === 'vacancy')) {
        commit('SET_SETTING_VACANCY_APPLY_EMAIL_ADDRESS', settingObject.vacancy_apply_email_address);
      }
      if (('default_company_name' in settingObject) && (settingObject.default_company_name.type === 'default')) {
        commit('SET_SETTING_DEFAULT_COMPANY_NAME', settingObject.default_company_name);
      }
      if (('default_company_abn' in settingObject) && (settingObject.default_company_abn.type === 'default')) {
        commit('SET_SETTING_DEFAULT_COMPANY_ABN', settingObject.default_company_abn);
      }
      if (('appointment_online_appointment_terms_and_conditions' in settingObject) && (settingObject.appointment_online_appointment_terms_and_conditions.type === 'appointment')) {
        commit('SET_SETTING_APPOINTMENT_ONLINE_APPOINTMENT_TERMS_AND_CONDITIONS', settingObject.appointment_online_appointment_terms_and_conditions);
      }
      if (('contact_request_for_list' in settingObject) && (settingObject.contact_request_for_list.type === 'contact')) {
        commit('SET_SETTING_CONTACT_REQUEST_FOR_LIST', settingObject.contact_request_for_list);
      }
      if (('payment_afterpay_payment_status' in settingObject) && (settingObject.payment_afterpay_payment_status.type === 'payment')) {
        commit('SET_SETTING_PAYMENT_AFTER_PAY_PAYMENT_STATUS', settingObject.payment_afterpay_payment_status);
      }
      if (('payment_card_payment_status' in settingObject) && (settingObject.payment_card_payment_status.type === 'payment')) {
        commit('SET_SETTING_PAYMENT_CARD_PAYMENT_STATUS', settingObject.payment_card_payment_status);
      }
      if (('payment_cash_payment_status' in settingObject) && (settingObject.payment_cash_payment_status.type === 'payment')) {
        commit('SET_SETTING_PAYMENT_CASH_PAYMENT_STATUS', settingObject.payment_cash_payment_status);
      }
      if (('payment_eft_payment_status' in settingObject) && (settingObject.payment_eft_payment_status.type === 'payment')) {
        commit('SET_SETTING_PAYMENT_EFT_PAYMENT_STATUS', settingObject.payment_eft_payment_status);
      }
      if (('default_customer_mob_app' in settingObject) && (settingObject.default_customer_mob_app.type === 'default')) {
        commit('SET_SETTING_DEFAULT_CUSTOMER_MOB_APP', settingObject.default_customer_mob_app);
      }
      if (('default_website_header_banner_slider' in settingObject) && (settingObject.default_website_header_banner_slider.type === 'default')) {
        commit('SET_SETTING_DEFAULT_WEBSITE_HEADER_BANNER_SLIDER', settingObject.default_website_header_banner_slider);
      }
      if (('default_website_medical_service_page_url' in settingObject) && (settingObject.default_website_medical_service_page_url.type === 'default')) {
        commit('SET_SETTING_DEFAULT_WEBSITE_MEDICAL_SERVICE_PAGE_URL', settingObject.default_website_medical_service_page_url);
      }
      if (('default_website_ndis_page_url' in settingObject) && (settingObject.default_website_ndis_page_url.type === 'default')) {
        commit('SET_SETTING_DEFAULT_WEBSITE_NDIS_PAGE_URL', settingObject.default_website_ndis_page_url);
      }

    });
  },

}
