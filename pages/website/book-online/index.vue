<template>
<div class="py-5">
    <div class="container">
        <h2>Make booking</h2>
        <p>Work begins as soon as you book and provide requirements.</p>
        <div class="row mt-lg-5 mt-4">
            <div class="col-lg-3 col-12">
                <div class="d-lg-block d-none">
                    <div class="sticky-listing-menu">
                        <IncludesProgressBar :step-bar="stepBar" :step="step" :current-step="currentStep" />
                    </div>
                </div>
                <div class="d-lg-none d-block fw-bold mb-3">
                    <h6 class="small-device-step-count">Step <span class="brand-color">{{ step }}</span>/{{ stepBar.length }}</h6>
                </div>
            </div>
            <div class="col-lg-9 col-12">

                <!-- -----STEP ONE / SERVICE PREFERENCE----- -->
                <div v-if="step === 1" class="booking-form book-online-form px-md-5 px-sm-4 px-2 py-4 ms-lg-5 ms-0">
                    <div class="mb-md-4 mb-3 pb-md-1 pb-0">
                        <label for="">What service do you want?</label>
                        <multi-select v-model="selectedService" :allow-empty="false" label="name" track-by="id" :options="services" :show-labels="false" placeholder="Select Service"></multi-select>
                    </div>
                    <div class="mb-md-4  pb-md-1 pb-0">
                        <label>Select your service platform</label>
                        <multi-select v-model="selectedPlatform" label="name" track-by="value" :options="servicePlatformOptions?.value??[]" :show-labels="false" placeholder="Select Platform"></multi-select>
                    </div>
                    <div class="mb-4">
                        <label for="">Describe your Issues</label>
                        <textarea v-model="issueDetails" class="form-control" name="" rows="6" placeholder="Please provide as much information as possible"></textarea>
                    </div>
                    <div class="text-end">
                        <button :disabled="disableServicePreference" @click="getServicePreferences" :class="disableServicePreference ? 'btn-disabled' : 'brand-fill-btn'" class="btn px-5">Next</button>
                    </div>
                </div>

                <!-- -----STEP TWO / BOOKING PREFERENCE----- -->
                <div v-if="step === 2" class="booking-form book-online-form px-md-5 px-2 py-4 ms-lg-5 ms-0">
                    <div>
                        <!-- Home business checkbox -->
                        <div class="mb-3">
                            <p class="mb-2">Please choose who requires this service</p>
                            <div class="row">
                                <div class="col-sm-6 col-12 mb-4">
                                    <div class="h-100">
                                        <label class="booking-form-radio-btn">
                                            <input v-model="serviceFor" value="home" class="booking-form-radio-input" type="radio" name="home-business-checkbox" id="" />
                                            <div class="booking-form-radio-content">
                                                <div class="text-center py-3">
                                                    <span class="d-block checkbox-icon"><i class="fa-solid fa-shop"></i></span>
                                                    <h5 class="d-block mb-0 pb-1 pt-2">Home</h5>
                                                    <span class="text-capitalize px-2 d-block">Service offered to the homes</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-12 mb-4">
                                    <div class="h-100">
                                        <label class="booking-form-radio-btn">
                                            <input v-model="serviceFor" value="business" class="booking-form-radio-input" type="radio" name="home-business-checkbox" id="" />
                                            <div class="booking-form-radio-content">
                                                <div class="text-center py-3">
                                                    <span class="d-block checkbox-icon"><i class="fa-solid fa-hotel"></i></span>
                                                    <h5 class="d-block mb-0 pb-1 pt-2">Business</h5>
                                                    <span class="text-capitalize px-2 d-block">Service offered to the businesses</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Onsite remote checkbox -->
                        <div class="mb-3">
                            <p class="mb-sm-2 mb-0">Please choose how you would like us to deliver this service</p>
                            <div class="row">
                                <div class="col-sm-6 col-12 mb-4">
                                    <div class="h-100">
                                        <label class="booking-form-radio-btn">
                                            <input v-model="serviceType" value="onsite" class="booking-form-radio-input" type="radio" name="onsite-remote-checkbox" />
                                            <div class="booking-form-radio-content">
                                                <div class="text-center py-3">
                                                    <span class="d-block checkbox-icon"><i class="fas fa-network-wired"></i></span>
                                                    <h5 class="d-block mb-0 pb-1 pt-2">Onsite</h5>
                                                    <span class="text-capitalize px-2 d-block">The technician will be there physically</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-12 mb-4">
                                    <div class="h-100">
                                        <label class="booking-form-radio-btn">
                                            <input v-model="serviceType" value="remote" class="booking-form-radio-input" type="radio" name="onsite-remote-checkbox" />
                                            <div class="booking-form-radio-content">
                                                <div class="text-center py-3">
                                                    <span class="d-block checkbox-icon"><i class="fa-solid fa-chalkboard-user"></i></span>
                                                    <h5 class="d-block mb-0 pb-1 pt-2">Remote</h5>
                                                    <span class="text-capitalize px-2 d-block">The technician will be there virtually</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Parking type checkbox -->
                        <div v-if="serviceType === 'onsite'" class="mb-3">
                            <p class="mb-sm-2 mb-0">Please choose the parking option available at your location</p>
                            <div class="d-flex flex-wrap">
                                <div class="me-sm-2 me-1 mb-2" v-for="(singleParkingOption,index) in parkingOptions" :key="index">
                                    <label class="booking-form-radio-btn parking-checkbox-width">
                                        <input v-model="parkingType" :value="singleParkingOption.value" class="booking-form-radio-input" type="radio" name="parking-type-checkbox" />
                                        <div class="booking-form-radio-content">
                                            <div class="text-center py-1">
                                                <h6 class="d-block mb-0 pb-1 pt-2">{{singleParkingOption?.name}}</h6>
                                            </div>
                                        </div>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="w-100 pt-3">
                        <div class="d-flex justify-content-between bg-white pb-1">
                            <button @click="goBack" class="btn brand-outlined-btn px-sm-5 px-4">Prev</button>
                            <button :disabled="disableBookingPreference" @click="getBookingPreference" :class="disableBookingPreference ? 'btn-disabled' : 'brand-fill-btn'" class="btn px-sm-5 px-4">Next</button>
                        </div>
                    </div>
                </div>

                <!-- -----STEP FOUR / SCHEDULE----- -->
                <div v-if="step === 3" class="booking-form book-online-form px-md-5 px-2 py-4 ms-lg-5 ms-0">
                    <div class="information-form">
                        <div class="pt-3">
                            <label>Where do you need it done?</label>
                            <google-auto-complete id="map" ref="address" class="form-control" placeholder="Please type your address" country="au" @placechanged="getAddressData"></google-auto-complete>
                            <div v-if="(addressInformation.street || addressInformation.suburb || addressInformation.state || addressInformation.zipCode)">
                                <p class="text-18 text-center mb-4 mt-4 text-blue">
                                    <span class="blink-text brand-color me-2"><i class="fa-solid fa-circle-info"></i></span>
                                    <span class="underline text-blue">&nbsp;Did you find errors in the address? Please enter manually</span>
                                </p>
                                <div class="row">
                                    <div class="col-md-6 col-12 mb-4">
                                        <label class="info-label" for="booking-street">Street</label>
                                        <input v-model="addressInformation.street" type="text" name="street" class="form-control" placeholder="Enter street name">
                                    </div>
                                    <div class="col-md-6 col-12 mb-4">
                                        <label class="info-label" for="booking-suburb">Suburb</label>
                                        <input v-model="addressInformation.suburb" type="text" name="suburb" class="form-control" placeholder="Enter suburb">
                                    </div>
                                    <div class="col-md-6 col-12 multi-select-input mb-md-4 mb-3 pb-md-1 pb-0">
                                        <label class="info-label" for="">State</label>
                                        <multi-select v-model="selectedState" label="name" track-by="value" :options="stateList.value" :show-labels="false"></multi-select>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <label class="info-label" for="booking-zip">Zip Code</label>
                                        <input v-model="addressInformation.zipCode" type="text" class="form-control" name="zipCode" placeholder="Enter zip code">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-100 pt-4 pb-3">
                        <div class="d-flex justify-content-between bg-white pb-1">
                            <button @click="goBack" class="btn brand-outlined-btn px-sm-5 px-4">Prev</button>
                            <button :disabled="disableAddress" @click="getBookingAddress" :class="disableAddress ? 'btn-disabled' : 'brand-fill-btn'" class="btn px-sm-5 px-4">Next</button>
                        </div>
                    </div>
                </div>
                <!-- -----STEP FOUR / SCHEDULE----- -->
                <div v-if="step === 4" class="booking-form book-online-form px-md-5 px-sm-4 px-2 py-4 ms-lg-5 ms-0">
                    <div>
                        <div class="date-picker-input book-online-datepicker mb-md-4  pb-md-1 pb-0">
                            <label for="">Please choose the date you would like this service</label>
                            <no-ssr>
                                <v-date-picker v-model="selectedDate" :update-on-input="true" :masks="{input: ['DD MMMM YYYY']}" :min-date='new Date()' :model-config="{ type: 'string', mask: 'YYYY-MM-DD'}">
                                    <template v-slot="{ inputValue, togglePopover }">
                                        <div class="d-flex align-items-center" @click="togglePopover()" style="cursor: pointer;">
                                            <i class='bx bx-calendar mr-1'></i>
                                            <input class="form-control" placeholder="Select Date" :value="inputValue" style="cursor: pointer;" />
                                        </div>
                                    </template>
                                </v-date-picker>
                            </no-ssr>
                        </div>
                        <div v-if="(technicianAvailableTimeSlots.status === true) && selectedDate">
                            <p class="mb-2">Please choose the time you would like this service</p>
                            <div class="d-flex flex-wrap mb-5 pb-xl-5 pb-2">
                                <div class="mx-2 mb-2" v-for="(singleTimeSlot,index) in  technicianAvailableTimeSlots?.slots ?? []" :key="index">
                                    <label class="booking-form-radio-btn time-slot-checkbox-width">
                                        <input v-model="selectedTime" :value="singleTimeSlot.value" class="booking-form-radio-input" type="radio" name="parking-type-checkbox" />
                                        <div class="booking-form-radio-content rounded-0">
                                            <div class="text-center py-1">
                                                <h6 class="d-block mb-0 pb-1 pt-2">{{ singleTimeSlot.name }}</h6>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-100">
                        <div class="d-flex justify-content-between bg-white pb-1">
                            <button @click="goBack" class="btn brand-outlined-btn px-sm-5 px-4">Prev</button>
                            <button :disabled="disableSchedule" @click="getBookingSchedule" :class="disableSchedule ? 'btn-disabled' : 'brand-fill-btn'" class="btn px-sm-5 px-4">Next</button>
                        </div>
                    </div>
                </div>

                <!-- -----STEP FIVE / INFORMATION -->
                <div v-if="step === 5" class="booking-form book-online-form px-md-5 px-sm-4 px-2 py-4 ms-lg-5 ms-0">
                    <div v-if="!bookingSummery" class="information-form">
                        <div class="pt-3 pb-4">
                            <h5>Your contact Information</h5>
                            <div class="row pt-1" v-if="isExistingUserFindApiCalled && (!existingCustomer)">
                                <div class="col-md-6">
                                    <div class="mb-4">
                                        <label class="info-label">First Name</label>
                                        <input v-model="userInformation.firstName" class="form-control text-capitalize" type="text" placeholder="Enter your first name">
                                        <div class="mt-1" v-if="errors.firstName.length > 0">
                                            <p class="text-danger mb-0" v-for="(error, index) in errors.firstName" :key="index">{{ error }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-4">
                                        <label class="info-label">Last Name</label>
                                        <input v-model="userInformation.lastName" class="form-control text-capitalize" type="text" placeholder="Enter your last name">
                                        <div class="mt-1" v-if="errors.lastName.length > 0">
                                            <p class="text-danger mb-0" v-for="(error, index) in errors.lastName" :key="index">{{ error }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-12">
                                    <div class="mb-4">
                                        <label class="info-label">Phone Number</label>
                                        <input v-model="userInformation.phone" class="form-control" type="text" placeholder="Enter your phone number">
                                        <div class="mt-1" v-if="errors.phone.length > 0">
                                            <p class="text-danger mb-0" v-for="(error, index) in errors.phone" :key="index">{{ error }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-4">
                                        <label class="info-label">Email Address</label>
                                        <input v-model="userInformation.email" class="form-control" type="email" placeholder="Enter a valid email address">
                                        <div class="mt-1" v-if="errors.email.length > 0">
                                            <p class="text-danger mb-0" v-for="(error, index) in errors.email" :key="index">{{ error }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12" v-if="serviceFor === 'business'">
                                    <div class="mb-4">
                                        <label class="info-label">Business Name</label>
                                        <input v-model="businessName" class="form-control" type="text" placeholder="Enter your business name">
                                        <div class="mt-1" v-if="errors.businessName.length > 0">
                                            <p class="text-danger mb-0" v-for="(error, index) in errors.businessName" :key="index">{{ error }}</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div class="row" v-if="isExistingUserFindApiCalled && (!existingCustomer)">
                                <div class="col-md-12">
                                    <div class="mb-4">
                                        <label class="info-label">Referral Code </label>
                                        <input v-model="referrerCode" class="form-control" type="text" placeholder="Enter your code">
                                    </div>
                                </div>
                            </div>

                            <div class="booking-btn w-100 pt-4">
                                <div class="d-flex justify-content-between bg-white">
                                    <button @click="goBack" class="btn brand-outlined-btn px-sm-5 px-4">Prev</button>
                                    <button :disabled="disableContactInfo" @click="getPersonalDetails" :class="disableContactInfo ? 'btn-disabled' : 'brand-fill-btn'" class="btn px-sm-5 px-4">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- BOOKING SUMMERY -->
                    <div v-if="bookingSummery" class="information-form">
                        <div>
                            <h4 class="text-blue text-center">Service Booking Summery</h4>
                            <table class="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td colspan="5" class="text-end">
                                            <div class="section-border">
                                                <button @click="goToStepOne()" class="btn edit-btn p-0 mt-1">
                                                    <nuxt-img preload quality="80" loading="lazy" src="/images/global/edit-icon.svg" alt="Edit Service" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pt-0 half-width-td"><span class="text-secondary text-500">Service Name:</span></td>
                                        <td class="pt-0">
                                            <p class="mb-0 text-capitalize text-secondary">{{ selectedService?.name ?? '' }}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span class="text-secondary text-500">Platform:</span></td>
                                        <td>
                                            <p class="mb-0 text-capitalize text-secondary">{{ selectedPlatform?.name ?? '' }}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span class="text-secondary text-500">Note:</span></td>
                                        <td>
                                            <p class="mb-0 text-secondary">{{ issueDetails }}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" class="text-end">
                                            <div class="section-border mt-4">
                                                <button @click="goToStepTwo()" class="btn edit-btn p-0 mt-1">
                                                    <nuxt-img preload quality="80" loading="lazy" src="/images/global/edit-icon.svg" alt="Edit Service" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pt-0 half-width-td"><span class="text-secondary text-500">Requires for:</span></td>
                                        <td class="pt-0">
                                            <p class="mb-0 text-capitalize text-secondary">{{ serviceFor }}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span class="text-secondary text-500">Delivery Type:</span></td>
                                        <td>
                                            <p class="mb-0 text-capitalize text-secondary">{{ serviceType }}</p>
                                        </td>
                                    </tr>
                                    <tr v-if="!(parkingType === '' || null)">
                                        <td><span class="text-secondary text-500">Parking Type:</span></td>
                                        <td>
                                            <p class="mb-0 text-secondary">{{ selectedParkingName(parkingType) }}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" class="text-end">
                                            <div class="section-border mt-4">
                                                <button @click="gotToStepFive()" class="btn edit-btn p-0 mt-1">
                                                    <nuxt-img preload quality="80" loading="lazy" src="/images/global/edit-icon.svg" alt="Edit Service" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pt-0"><span class="text-secondary text-500">Name:</span></td>
                                        <td class="pt-0">
                                            <p class="mb-0 text-capitalize text-secondary"><span>{{ userInformation.firstName }}</span> <span>{{ userInformation.lastName }}</span></p>
                                        </td>
                                    </tr>
                                    <tr v-if="serviceFor === 'business'">
                                        <td class="pt-0"><span class="text-secondary text-500">Business Name:</span></td>
                                        <td class="pt-0">
                                            <p class="mb-0 text-capitalize text-secondary">{{ businessName }}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span class="text-secondary text-500">Email:</span></td>
                                        <td>
                                            <p class="mb-0 text-secondary">{{ userInformation.email }}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span class="text-secondary text-500">Phone:</span></td>
                                        <td>
                                            <p class="mb-0 text-secondary">{{userInformation.phone}}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="5">
                                            <div class="section-border mt-3"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span class="text-secondary text-500">Address:</span></td>
                                        <td>
                                            <p class="mb-0 text-secondary"><span>{{ addressInformation.street }}</span>,<span>&nbsp;{{ addressInformation.suburb }}</span>,<span>&nbsp;{{ addressInformation.state }}</span><span>&nbsp; {{ addressInformation.zipCode }}</span></p>
                                        </td>
                                        <td>
                                            <div class="text-end"><button @click="goToStepThree()" class="btn edit-btn p-0">
                                                    <nuxt-img preload quality="80" loading="lazy" src="/images/global/edit-icon.svg" alt="Edit Service" /></button></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span class="text-secondary text-500">Booking Schedule:</span></td>
                                        <td>
                                            <p class="mb-0 text-secondary"><span>{{ selectedDate }}</span><span>&nbsp;at</span><span> {{ selectedTimeFullName(selectedTime) }}</span></p>
                                        </td>
                                        <td>
                                            <div class="text-end"><button @click="goToStepFour()" class="btn edit-btn p-0">
                                                    <nuxt-img preload quality="80" loading="lazy" src="/images/global/edit-icon.svg" alt="Edit Service" /></button></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div class="w-100 pt-4">
                            <div class="d-flex justify-content-between bg-white pb-1">
                                <button @click="backToContactInformation()" class="btn brand-outlined-btn px-sm-5 px-4">Prev</button>
                                <button @click="continueBookingHandler()" class="btn brand-fill-btn px-sm-4 px-3">Save & Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- -----STEP SIX / PAYMENT -->
                <div v-if="step === 6" class="booking-form book-online-form px-md-5 px-sm-4 px-2 py-4 ms-lg-5 ms-0">
                    <div v-if="paymentChart" class="information-form">
                        <div class="pt-3 pb-4">
                            <h4 class="text-center pb-3 text-blue">Payment Details</h4>
                            <div class="w-75 mx-auto pb-2">
                                <table class="table payment-chart-table">
                                    <thead style="background-color: rgba(233, 236, 239, 100);">
                                        <tr>
                                            <th class="" scope="col">Details</th>
                                            <th class="text-end" scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="">Service</td>

                                            <td class="text-end ">${{parseFloat(preAppointmentResponse.service_price / 100).toFixed(2)}}</td>
                                        </tr>
                                        <tr >
                                            <td class="">Surcharge <small class="text-primary cursor-pointer text-danger"  v-if="(preAppointmentResponse.total_surcharge_amount / 100).toFixed(2) > 0 " style="cursor: pointer" @click="openViewDetailsModal('surcharge')">(view details)</small> :
                                            </td>

                                            <td class="text-end">

                                                ${{ parseFloat(preAppointmentResponse.total_surcharge_amount / 100).toFixed(2) }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="">Subtotal</td>
                                            <td class="text-end">
                                                ${{ parseFloat(preAppointmentResponse.subtotal_amount / 100).toFixed(2) }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="">Discount <small v-if="(preAppointmentResponse.total_discount_amount / 100).toFixed(2) > 0 " class="text-primary cursor-pointer text-danger" style="cursor: pointer" @click="openViewDetailsModal('discount')">(view details)</small> :
                                            </td>

                                            <td class="text-end">

                                                ${{ parseFloat(preAppointmentResponse.total_discount_amount / 100).toFixed(2) }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="">GST:</td>
                                            <td class="text-end ">

                                                ${{ parseFloat(preAppointmentResponse.gst_charge.amount / 100).toFixed(2)}}
                                            </td>
                                        </tr>
                                        <tr style="background-color: rgba(233, 236, 239, 100);">
                                            <td class="fw-bold ps-4">Total Payable</td>
                                            <td class="fw-bold text-end">

                                                ${{ parseFloat(preAppointmentResponse.grand_total / 100).toFixed(2) }}
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                 <div style="background-color: #f3faff;" v-if="preAppointmentResponse.holiday_surcharge.applied_status || preAppointmentResponse.same_day_surcharge.applied_status || preAppointmentResponse.weekend_surcharge.applied_status">
                                            <small  class="px-4 py-3 text-danger text-400"> By selecting another service date you can reduce your charge  <button @click="step=4" class="btn btn-sm bg-brand py-0 text-white">Click to change</button>  </small>

                                </div>
                            </div>
                            <div class="ps-4 pt-4 pb-4">
                                <div class="custom-default-checkbox mb-2">
                                    <input v-model="isCouponApplied" class="custom-default-checkbox-input" id="applyCoupon" name="apply-coupon" type="checkbox" />
                                    <label class="custom-default-checkbox-label" for="applyCoupon">
                                        <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                        </span>
                                        <strong style="font-size:15px;" class="d-inline-block ms-2">Apply Coupon </strong>
                                    </label>
                                    <small @click="openAvaliableCouponsModal()" class="text-primary" style="cursor: pointer;" v-if="coupons.length > 0">(Click to see all available coupon)</small>
                                </div>
                                <div class="pt-2 pb-3" v-if="isCouponApplied">
                                    <div class="row">
                                        <div class="col-10">
                                            <input v-model="couponCode" class="form-control booking-input mr-2" type="text" name="coupon" placeholder="Enter Coupon Code">
                                        </div>
                                        <div class="col-2 ps-0">
                                            <button class="btn px-4 " :class="[preAppointmentResponse.coupon_discount.validation_status === true ? 'btn-danger' : 'brand-fill-btn']" @click="applyCouponHandler">
                                                {{ preAppointmentResponse.coupon_discount.validation_status === true ? "Remove" : "Apply" }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-default-checkbox mb-2"  v-if="preAppointmentResponse.remaining_credited_payment > 0">
                                    <input v-model="isCreditApplied" class="custom-default-checkbox-input" id="applyCredit" name="apply-credit" type="checkbox" />
                                    <label class="custom-default-checkbox-label" for="applyCredit">
                                        <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                        </span>
                                        <strong style="font-size:15px;" class="d-inline-block ms-2">Apply Credit </strong>
                                    </label>
                                    <small  class="text-primary" style="cursor: pointer;" > ( Remaining credit Amount {{ (preAppointmentResponse.remaining_credited_payment / 100).toFixed(2) }} )</small>
                                </div>
                                <div class="pt-2 pb-3" v-if="isCreditApplied">
                                    <div class="row">
                                        <div class="col-10">
                                            <input v-model="creditCode" class="form-control booking-input mr-2" type="text" name="coupon" placeholder="Enter amount">
                                        </div>
                                        <div class="col-2 ps-0">
                                            <button class="btn px-4 " :class="[preAppointmentResponse.credited_payment_discount.validation_status === true ? 'btn-danger' : 'brand-fill-btn']" @click="applyCreditHandler">
                                                {{ preAppointmentResponse.credited_payment_discount.validation_status === true ? "Remove" : "Apply" }}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="custom-default-checkbox mb-3">
                                    <input v-model="agreed" class="custom-default-checkbox-input" id="agreedTerms" name="terms-conditions" type="checkbox" />
                                    <label class="custom-default-checkbox-label" for="agreedTerms">
                                        <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                        </span>
                                        <span style="font-size:15px;" class="d-inline-block ms-1">I agree with <a href="#bookingTermsAndConditions" class="link-hover brand-color fw-bold style-none">Terms & Conditions</a></span>
                                    </label>
                                </div>

                            </div>
                            <div class="w-100">
                                <div class="d-flex justify-content-between bg-white">

                                    <button @click="backToBookingSummerty" class="btn brand-outlined-btn px-sm-5 px-4">Prev</button>
                                    <button :disabled="disablePaymentDetails" @click="getPaymentDetails" :class="disablePaymentDetails ? 'btn-disabled' : 'brand-fill-btn'" class="btn px-sm-3 px-2">Proceed to Pay</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- MAKE PAYMENT -->
                    <div v-if="!paymentChart" class="information-form">
                        <div class="pt-2">
                            <h4 class="text-center text-capitalize">Make Payment</h4>
                            <div class="d-flex justify-content-center my-4">
                                <nuxt-img preload quality="80" loading="lazy" class="master-card" src="/images/payment-icon/master-card.svg" alt="Master Card" />
                                <nuxt-img preload quality="80" loading="lazy" class="mx-2 visa-card" src="/images/payment-icon/visa.svg" alt="Visa" />
                                <nuxt-img preload quality="80" loading="lazy" class="after-pay-card" src="/images/payment-icon/afterpay-loop.svg" alt="Afterpay" />

                            </div>
                            <div class="mt-5 ps-3">
                                <div class="mb-3">

                                    <div class="d-inline-block">
                                        <label class="payment-option-label">
                                            <input class="payment-option-input" type="radio" value="cardPayment" v-model="paymentType" name="payment-option">
                                            <span class="package-radio-design"></span>
                                            <span class="payment-option-label">Card Payment</span>
                                        </label>
                                    </div>
                                    <div class="pt-2">
                                        <label class="payment-option-label">
                                            <input class="payment-option-input" type="radio" value="afterPayPayment" v-model="paymentType" name="payment-option">
                                            <span class="package-radio-design"></span>
                                            <span class="payment-option-label">After pay</span>
                                        </label>
                                    </div>

                                    <div class="py-2">
                                        <p v-if="(!(userInformation.phone)) && this.paymentType === 'afterPayPayment'" class="text-danger ">For afterpay payment you must provide your phone number <span class="text-primary cursor-pointer" data-bs-toggle="modal" style="cursor: pointer;" data-bs-target="#userPhoneUpdateModal">(click to add phone number)</span></p>
                                        <p v-if="(!(userInformation.email)) && this.paymentType === 'afterPayPayment'" class="text-danger  ">For afterpay payment you must provide your email <span class="text-primary cursor-pointer" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#userEmailUpdateModal">(click to add email)</span></p>

                                    </div>

                                    <div v-if="paymentType === 'cardPayment'">
                                        <div class="my-4 card-payment-section rounded p-4">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group w-100 mr-4 mb-5">
                                                        <label class="payment-label" for="booking-card-number">Card number</label>
                                                        <input v-model="cardNumber" type="text" name="card_number" class="form-control booking-input" id="booking-card-number" placeholder="Enter your card number">
                                                        <!-- showing error -->
                                                        <div v-if="cardTokenBackendErrors.card_number !== undefined && cardTokenBackendErrors.card_number.length > 0 " class="text-danger">
                                                            <p class="mb-0" v-for="(error,index) in cardTokenBackendErrors.card_number" :key="index">
                                                                {{ error }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group w-100 mr-3 mb-5">
                                                        <label class="payment-label" for="booking-card-name">Card holder name</label>
                                                        <input v-model="cardName" type="text" name="card_name" class="form-control booking-input" id="booking-card-name" placeholder="Full name as displayed on card">
                                                        <!-- showing error -->
                                                        <div v-if="cardTokenBackendErrors.card_name !== undefined && cardTokenBackendErrors.card_name.length > 0 " class="text-danger">
                                                            <p class="mb-0" v-for="(error,index) in cardTokenBackendErrors.card_name" :key="index">
                                                                {{ error }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group w-100 mb-3">
                                                        <label class="payment-label" for="card-expiry-date">Expiry Date</label>
                                                        <input v-model="cardExpiryDate" type="text" name="expiry_date" class="form-control booking-input" id="card-expiry-date" placeholder="MM/YY" maxlength="5" :keyup="this.cardExpiryDate=this.cardExpiryDate.replace(/^(\d\d)(\d)$/g,'$1/$2').replace(/^(\d\d\/\d\d)(\d+)$/g,'$1/$2')">
                                                        <!-- showing error -->
                                                        <div v-if="cardTokenBackendErrors.card_expire_month !== undefined && cardTokenBackendErrors.card_expire_month.length > 0 " class="text-danger">
                                                            <p class="mb-0" v-for="(error,index) in cardTokenBackendErrors.card_expire_month" :key="index"> {{ error }}</p>
                                                        </div>
                                                        <div v-if="cardTokenBackendErrors.card_expire_year !== undefined && cardTokenBackendErrors.card_expire_year.length > 0 " class="text-danger">
                                                            <p class="mb-0" v-for="(error,index) in cardTokenBackendErrors.card_expire_year" :key="index"> {{ error }}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group w-100 mb-3">
                                                        <div class="d-flex align-items-center">
                                                            <label class="payment-label" for="card-cvv">
                                                                CVV <i class="info-icon fa-solid fa-info"></i>
                                                                <small class="show-max-value"> &nbsp;max:4 digit</small>
                                                            </label>
                                                        </div>
                                                        <input v-model="cardCvc" ref="cvvInput" type="text" class="form-control booking-input" name="card_cvv" id="card-cvv" placeholder="cvv" maxlength="4">
                                                        <!-- showing error -->
                                                        <div v-if="cardTokenBackendErrors.card_cvc !== undefined && cardTokenBackendErrors.card_cvc.length > 0 " class="text-danger">
                                                            <p class="mb-0" v-for="(error,index) in cardTokenBackendErrors.card_cvc" :key="index">
                                                                {{ error }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="w-100">
                            <div class="d-flex justify-content-between bg-white pb-4">
                                <button @click="backToPaymentDetails()" class="btn brand-outlined-btn px-sm-5 px-4">Prev</button>
                                <button @click="createAppointmentPaymentHandler()" class="btn brand-fill-btn px-sm-4 px-3">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- BOOKING TERMS & CONDITIONS -->
        <div class="booking-terms-bg rounded p-4">
            <div id="bookingTermsAndConditions" class="container py-4">
                <div class="row">
                    <div class="col-12">
                        <div v-if="settingAppointmentOnlineAppointmentTermsAndConditions.value">
                            <div v-html="settingAppointmentOnlineAppointmentTermsAndConditions.value"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="" data-toggle="modal" data-target="#userPhoneUpdateModal"></div>
    <div class="" data-toggle="modal" data-target="#userEmailUpdateModal"></div>
    <div class="" data-bs-toggle="modal" data-bs-target="#AvailableCouponsModal"></div>
    <UserPhoneUpdateModal :user-id="userInformation.id" modal-usages-for="user" modal-name="userPhoneUpdateModal" :user-data="{firstName:userInformation.firstName, lastName: userInformation.lastName, email:userInformation.email, phoneNumber: userInformation.phone }" @updatedUserData="onUpdatedUserData" />
    <UserEmailUpdateModal :user-id="userInformation.id" modal-usages-for="user" modal-name="userEmailUpdateModal" :user-data="{firstName:userInformation.firstName, lastName: userInformation.lastName, email:userInformation.email, phoneNumber: userInformation.phone }" @updatedUserData="onUpdatedUserData" />
    <AvailableCouponsModal @emitApplyCoupon="applyCouponEmitHandler" />

    <modal name="view-details-modal" style="height: auto;">
        <div class="">
            <div class="brand-header bg-brand d-flex justify-content-between text-white py-2 px-3">
                <div>
                    Details
                </div>
                <div>
                    <button @click="closeViewDetailsModal" class="btn text-white p-0"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
            <div class="px-4 py-3">
                <div v-if="selectedDetails === 'surcharge'">
                    <div class="row" v-if="preAppointmentResponse.timebase_surcharge.applied_status">
                        <div class="col-7 text-left">
                            <p class="text-bold-400">Time-base surcharge:</p>
                        </div>
                        <div class="col-5 text-right">
                            <p>${{ parseFloat(preAppointmentResponse.timebase_surcharge.amount /100 ).toFixed(2) }} </p>
                        </div>
                    </div>
                    <div class="row" v-if="preAppointmentResponse.weekend_surcharge.applied_status">
                        <div class="col-7 text-left">
                            <p class="text-bold-400">Weekend Surcharge:</p>
                        </div>
                        <div class="col-5 text-right">
                            <p class="">${{ parseFloat(preAppointmentResponse.weekend_surcharge.amount /100 ).toFixed(2) }}</p>
                        </div>
                    </div>
                    <div class="row" v-if="preAppointmentResponse.holiday_surcharge.applied_status">
                        <div class="col-7 text-left">
                            <p class="text-bold-400">Holiday Surcharge:</p>
                        </div>
                        <div class="col-5 text-right">
                            <p class="">${{ parseFloat(preAppointmentResponse.holiday_surcharge.amount /100).toFixed(2) }}</p>
                        </div>
                    </div>
                    <div class="row" v-if="preAppointmentResponse.fuel_levy.applied_status">
                        <div class="col-7 text-left">
                            <p class="text-bold-400">Fuel Levy :</p>
                        </div>
                        <div class="col-5 text-right">
                            <p class="">${{ parseFloat(preAppointmentResponse.fuel_levy.amount /100).toFixed(2) }}</p>
                        </div>
                    </div>
                    <div class="row" v-if="preAppointmentResponse.city_area_surcharge.applied_status">
                        <div class="col-7 text-left">
                            <p class="text-bold-400">City Area Surcharge:</p>
                        </div>
                        <div class="col-5 text-right">
                            <p class="">${{ parseFloat(preAppointmentResponse.city_area_surcharge.amount /100).toFixed(2) }}</p>
                        </div>
                    </div>
                    <div class="row" v-if="preAppointmentResponse.distance_surcharge.applied_status">
                        <div class="col-7 text-left">
                            <p class="text-bold-400">Distance Surcharge {{`(${preAppointmentResponse.distance_surcharge.distance_value_in_km})`}} : </p>
                        </div>
                        <div class="col-5 text-right">
                            <p class="">${{parseFloat(preAppointmentResponse.distance_surcharge.amount /100 ).toFixed(2)}} </p>
                        </div>
                    </div>
                    <div class="row" v-if="preAppointmentResponse.same_day_surcharge.applied_status">
                        <div class="col-7 text-left">
                            <p class="text-bold-400">Sameday Fee:</p>
                        </div>
                        <div class="col-5 text-right">
                            <p class="">${{ parseFloat(preAppointmentResponse.same_day_surcharge.amount /100 ).toFixed(2) }} </p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-7 text-left">
                            <p class="text-bold-700">Total Surcharge:</p>
                        </div>
                        <div class="col-5 text-right">
                            <p class="text-bold-700">${{ parseFloat(preAppointmentResponse.total_surcharge_amount / 100).toFixed(2) }} </p>
                        </div>
                    </div>
                </div>

                <div v-if="selectedDetails === 'discount'">
                    <div class="row" v-if="preAppointmentResponse.online_appointment_discount.applied_status">
                        <div class="col-7 text-left">
                            <p class="text-bold-400">Online Appointment Discount:</p>
                        </div>
                        <div class="col-5 text-right">
                            <p>${{ parseFloat(preAppointmentResponse.online_appointment_discount.amount /100 ).toFixed(2) }} </p>
                        </div>
                    </div>

                    <div class="row" v-if="preAppointmentResponse.parking_discount.applied_status">
                        <div class="col-7 text-left">
                            <p class="text-bold-400">Parking Discount:</p>
                        </div>
                        <div class="col-5 text-right">
                            <p>${{ parseFloat(preAppointmentResponse.parking_discount.amount /100 ).toFixed(2) }} </p>
                        </div>
                    </div>

                    <div class="row" v-if="preAppointmentResponse.loyalty_discount.applied_status">
                        <div class="col-7 text-left">
                            <p class="text-bold-400">Loyalty Discount:</p>
                        </div>
                        <div class="col-5 text-right">
                            <p>${{ parseFloat(preAppointmentResponse.loyalty_discount.amount /100 ).toFixed(2) }} </p>
                        </div>
                    </div>

                    <div class="row" v-if="preAppointmentResponse.applied_discount.applied_status">
                        <div class="col-7 text-left">
                            <p class="text-bold-400">Applied discount:</p>
                        </div>
                        <div class="col-5 text-right">
                            <p>${{ parseFloat(preAppointmentResponse.applied_discount.amount /100 ).toFixed(2) }} </p>
                        </div>
                    </div>

                    <div class="row" v-if="preAppointmentResponse.coupon_discount.applied_status">
                        <div class="col-7 text-left">
                            <p class="text-bold-400">Coupon Discount:</p>
                        </div>
                        <div class="col-5 text-right">
                            <p class="">${{ parseFloat(preAppointmentResponse.coupon_discount.amount /100 ).toFixed(2) }}</p>
                        </div>
                    </div>

                    <div class="row" v-if="preAppointmentResponse.credited_payment_discount.applied_status">
                        <div class="col-7 text-left">
                            <p class="text-bold-400">Credited Discount:</p>
                        </div>
                        <div class="col-5 text-right">
                            <p class="">${{ parseFloat(preAppointmentResponse.credited_payment_discount.amount /100 ).toFixed(2) }}</p>
                        </div>
                    </div>

                    <hr>
                    <div class="row">
                        <div class="col-7 text-left">
                            <p class="text-bold-700">Total Discount:</p>
                        </div>
                        <div class="col-5 text-right">
                            <p class="text-bold-700">${{ parseFloat(preAppointmentResponse.total_discount_amount / 100).toFixed(2) }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </modal>

</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex';
import Loader from '~/mixins/Loader';
import ShowToastMessage from '~/mixins/ShowToastMessage';
import UserPhoneUpdateModal from '~/components/includes/UserUpdateModal'
import UserEmailUpdateModal from '~/components/includes/UserUpdateModal'
import AvailableCouponsModal from './includes/AvailableCouponsModal.vue';

export default {
    name: "BookOnline",
    layout: 'website-layout',
    mixins: [Loader, ShowToastMessage],
    components: {
        UserPhoneUpdateModal,
        UserEmailUpdateModal,
        AvailableCouponsModal
    },
    data() {
        return {
            step: 1,
            editInfo: false,
            selectedDetails: '',
            currentStep: {
                value: '',
            },
            stepBar: [{
                    id: 1,
                    name: 'Service Preference'
                },
                {
                    id: 2,
                    name: 'Booking Preference'
                },
                {
                    id: 3,
                    name: 'Address'
                },
                {
                    id: 4,
                    name: 'Schedule'
                },
                {
                    id: 5,
                    name: 'Information'
                },
                {
                    id: 6,
                    name: 'Payment'
                }
            ],
            selectedService: '',
            selectedPlatform: '',
            selectedDate: "",
            issueDetails: '',
            serviceFor: '',
            serviceType: '',
            parkingType: "",
            userInformation: {
                id: null,
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            },
            existingCustomer: false,
            existingUser: false,
            customerInformation: {
                id: null,
                status: '',
                type: '',
            },
            bookingSummery: false,
            addressInformation: {
                id: null,
                street: '',
                suburb: '',
                state: '',
                zipCode: '',
                country: '',
            },
            selectedState: {
                name: 'Select a State',
                value: '',
            },
            selectedTime: '',
            paymentChart: true,
            isCouponApplied: false,
            couponCode: '',
            isCreditApplied: false,
            creditCode: '',
            agreed: false,
            paymentType: 'cardPayment',
            cardNumber: '',
            cardName: '',
            cardExpiryDate: '',
            cardExpireMonth: '',
            cardExpireYear: '',
            cardCvc: '',
            cardSurcharge: 0,
            cardTokenBackendErrors: {},

            cardTokenResponse: {
                id: '',
                used: '',
                card: {},
                payment_gateway: '',
            },
            // pre appointment api related data
            preAppointmentResponseErrors: [],
            errors: {
                email: [],
                phone: [],
                firstName: [],
                lastName: [],
                businessName: [],
            },
            businessName: '',
            referrerCode: '',
            referrerCodeIsValid: false,
            isExistingUserFindApiCalled: false,

            preAppointmentResponse: {
                message: '',
                status: '',
                service_price: '',
                remaining_credited_payment: '',
                same_day_surcharge: {
                    applied_status: '',
                    amount: ''
                },
                timebase_surcharge: {
                    applied_status: '',
                    amount: '',
                },
                weekend_surcharge: {
                    applied_status: '',
                    amount: ''
                },
                distance_surcharge: {
                    applied_status: '',
                    message: '',
                    distance_value: '',
                    distance_value_in_km: '',
                    amount: '',
                },
                holiday_surcharge: {
                    applied_status: '',
                    amount: '',
                },
                fuel_levy: {
                    applied_status: '',
                    amount: '',
                },
                city_area_surcharge: {
                    applied_status: '',
                    amount: '',
                },
                total_surcharge_amount: '',
                subtotal_amount: '',
                applied_discount: {
                    applied_status: '',
                    amount: ''
                },
                coupon_discount: {
                    applied_status: '',
                    validation_status: '',
                    message: '',
                    apply_on: '',
                    amount: '',
                    coupon_id: '',
                    coupon_code: ''
                },
                credited_payment_discount: {
                    applied_status: '',
                    validation_status: '',
                    amount: '',
                    message: ''
                },
                online_appointment_discount: {
                    applied_status: '',
                    amount: '',

                },
                parking_discount: {
                    applied_status: '',
                    amount: '',

                },
                loyalty_discount: {
                    applied_status: '',
                    amount: '',

                },
                total_discount_amount: '',
                gst_charge: {
                    applied_status: '',
                    amount: ''
                },
                grand_total: '',

            },
        }
    },
    computed: {
        ...mapGetters({
            // users
            user: 'users/user',

            // payments
            payment: 'payments/payment',

            // address
            address: 'addresses/address',

            // customers
            customer: 'customers/customer',
            referrerCustomer: 'customers/referrerCustomer',

            // services
            services: 'services/services',

            // settings
            servicePlatformOptions: 'settings/settingAppointmentServicePlatform',
            stateList: 'settings/settingDefaultState',
            settingDefaultCustomerRole: 'settings/settingDefaultCustomerRole',
            settingAppointmentOnlineAppointmentWithoutPaymentStatus: 'settings/settingAppointmentOnlineAppointmentWithoutPaymentStatus',
            settingPaymentCardSurcharge: 'settings/settingPaymentCardSurcharge',

            // technicians
            technicianAvailableTimeSlots: 'technicians/technicianAvailableTimeSlots',

            //appointment
            onSiteAddressDistance: 'appointments/onSiteAddressDistance',
            appointment: 'appointments/appointment',

            //

            // booking terms and conditions
            settingAppointmentOnlineAppointmentTermsAndConditions: 'settings/settingAppointmentOnlineAppointmentTermsAndConditions',

            // after pay payment gateway
            checkout: 'afterpayPaymentGateways/checkout',
            minimumAmount: 'afterpayPaymentGateways/minimumAmount',
            maximumAmount: 'afterpayPaymentGateways/maximumAmount',
            afterpayPaymentGateway: 'afterpayPaymentGateways/afterpayPaymentGateway',


            // available coupons
            coupons: 'coupons/coupons',

        }),
        // stateList() {
        //         return this.$store.getters['settings/settingDefaultState'].value
        //     },

        parkingOptions() {
            return this.$store.getters['settings/settingDefaultParkingType'] ?.value ?? [];

        },

        disableServicePreference() {
            return !(this.selectedService ?.name && this.selectedPlatform ?.name && this.issueDetails);

        },
        disableBookingPreference() {
            return !(this.serviceFor && this.serviceType && ((this.serviceType === 'remote') || ((this.serviceType === 'onsite') && (this.parkingType === 0 || this.parkingType))));
        },
        disableAddress() {
            return !this.addressInformation.street || !this.addressInformation.suburb || !this.addressInformation.state || !this.addressInformation.zipCode ? true : false;
        },
        disableSchedule() {
            return !this.selectedDate || !this.selectedTime ? true : false;
        },
        disableContactInfo() {
            return !((this.userInformation.email && this.validateEmail()) && (this.userInformation.phone && this.validatePhoneNumber()));
        },
        disablePaymentDetails() {
            return !this.agreed || (this.isCouponApplied && !this.couponCode) ? true : false;
        },
    },
    watch: {
        serviceType(currentServiceType) {
            if (currentServiceType === 'remote') {
                this.parkingType = "";
            }
        },
        businessName(currentBusinessName) {
            if (currentBusinessName) {
                this.errors.businessName = [];
            }
        },
        async selectedDate(currentDate) {
            if (currentDate) {
                this.selectedTime = "";
                await this.getTechnicianTimeSlots(currentDate);

            }

        },
        'userInformation.firstName': function (currentFirstName) {
            if (currentFirstName) {
                this.errors.firstName = [];
            }
        },
        'userInformation.lastName': function (currentLastName) {
            if (currentLastName) {
                this.errors.lastName = [];
            }
        },
        'userInformation.email': function (currentEmail) {
            if (currentEmail) {
                if (!this.validateEmail()) {
                    this.errors.email = [];
                    this.errors.email.push('Please enter a valid email address');
                    return;
                } else {
                    this.errors.email = [];
                }
            }

        },
        'userInformation.phone': function (currentPhoneNumber) {
            if (currentPhoneNumber) {
                if (!this.validatePhoneNumber()) {
                    this.errors.phone = [];
                    this.errors.phone.push('Mobile number must be starts with (0-9) and 10 characters long');
                    return;
                } else {
                    this.errors.phone = [];
                }
            }

        },
        async isCouponApplied(currentCoupon) {
            if (currentCoupon === false) {
                this.couponCode = '';
                await this.preAppointment();
            }
        },
        async isCreditApplied(currentCredit) {
            if (currentCredit === false) {
                this.creditCode = '';
                await this.preAppointment();
            }
        },
        cardExpiryDate(currentExpiryDate) {
            this.cardExpireMonth = currentExpiryDate.slice(0, 2);
            this.cardExpireYear = currentExpiryDate.slice(-2);
            if (currentExpiryDate.length === 5) {
                this.$refs.cvvInput.focus();
            }
        },
        selectedState(currentState) {
            this.addressInformation.state = currentState ?.value ?? '';
        }

    },
    methods: {
        ...mapActions({
            // service
            getServices: 'services/getServices',

            // settings
            getSettings: 'settings/getSettings',

            // technicians
            postTechnicianAvailableTimeSlots: 'technicians/postTechnicianAvailableTimeSlots',

            // appointments
            postOnSiteAddressDistance: 'appointments/postOnSiteAddressDistance',
            resetAppointment: 'appointments/resetAppointment',
            appointmentCreators: 'appointments/appointmentCreators',
            postAppointmentNotes: 'appointments/postAppointmentNotes',
            postAppointmentCharge: 'appointments/postAppointmentCharge',
            postAppointmentHistory: 'appointments/postAppointmentHistory',
            postAppointment: 'appointments/postAppointment',
            postAppointmentPayments: 'appointments/postAppointmentPayments',

            postAppointmentCreationNotifyEmail: 'appointments/postAppointmentCreationNotifyEmail',
            preStoreAppointmentData: 'appointments/preStoreAppointmentData',

            // user
            postUser: 'users/postUser',
            userFind: 'users/userFind',
            getUser: 'users/getUser',
            resetUser: 'users/resetUser',

            // customer
            postCustomer: 'customers/postCustomer',
            resetCustomer: 'customers/resetCustomer',
            putCustomer: 'customers/putCustomer',
            getCustomer: 'customers/getCustomer',
            getReferrer: 'customers/getReferrer',

            // business
            postBusiness: 'businesses/postBusiness',

            // address
            postAddress: 'addresses/postAddress',
            resetAddress: 'addresses/resetAddress',

            // loyalty
            postLoyaltyCustomerRegistration: 'loyaltyPoints/postLoyaltyCustomerRegistration',
            postLoyaltyCustomerRefferar: 'loyaltyPoints/postLoyaltyCustomerRefferar',

            // payments
            postPayment: 'payments/postPayment',
            putPayment: 'payments/putPayment',
            resetPayment: 'payments/resetPayment',
            postPaymentCreationNotifyEmail: 'payments/postPaymentCreationNotifyEmail',

            // payment gateway
            cardTokenCreate: 'paymentGateways/cardTokenCreate',
            paymentCreateByToken: 'paymentGateways/paymentCreateByToken',
            paymentCreate: 'paymentGateways/paymentCreate',

            // card payment
            postCardPayment: 'cardPayments/postCardPayment',

            // discounts
            postDiscountStoreList: 'discounts/postDiscountStoreList',

            // couponUsages
            postCouponUsage: 'couponUsages/postCouponUsage',

            // after pay payment gateway
            tryPing: 'afterpayPaymentGateways/tryPing',
            getConfiguration: 'afterpayPaymentGateways/getConfiguration',
            createCheckout: 'afterpayPaymentGateways/createCheckout',
            captureImmediateFullPayment: 'afterpayPaymentGateways/captureImmediateFullPayment',
            updatePaymentByOrderId: 'afterpayPaymentGateways/updatePaymentByOrderId',

            // afterpay payment
            postAfterpayPayment: 'afterpayPayments/postAfterpayPayment',

            // avaliable valid coupons
            getAvailableValidCoupons: 'coupons/getAvailableValidCoupons',


        }),

      async  applyCreditHandler(){
        if (this.preAppointmentResponse.credited_payment_discount.validation_status === true) {
                this.creditCode =  "";
                // this.isCreditApplied = false;
            }
          await this.preAppointment();
        },
        async getAvailableValidCouponsHandler() {

            this.loader(true);
            const data = {
                activation_amount: Number(this.preAppointmentResponse.subtotal_amount),
                user_id: this.userInformation.id,
                apply_on: [0,2],
                website_visibility:1,
                post_code: this.addressInformation.zipCode,
                internal_coupon: 0,
                state:this.addressInformation.state,
                requested_date_time: `${this.selectedDate} ${this.selectedTime}`
            }
            const response = await this.getAvailableValidCoupons(data);
            if (response.message) {
                this.showToastMessage(response);
            }
            this.loader(false);

        },

        openAvaliableCouponsModal(){
          document.querySelector('[data-bs-target="#AvailableCouponsModal"]').click();
        },

        applyCouponEmitHandler(response) {
            document.querySelector('[data-bs-target="#AvailableCouponsModal"]').click();
            this.isCouponApplied = true;
            this.couponCode = response.couponCode;

            this.preAppointment();
        },
        backToPaymentDetails() {
            this.paymentChart = true;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },

        resetCustomerInformationState() {
            this.bookingSummery = false;
            this.isExistingUserFindApiCalled = true;
            if (this.userInformation.id) {
                this.userInformation.firstName = '';
                this.userInformation.lastName = '';
                this.userInformation.id = null;
            }

        },
        goToStepOne() {

            this.resetCustomerInformationState();
            this.step = 1;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        goToStepTwo() {
            this.resetCustomerInformationState();
            this.step = 2;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        gotToStepFive() {
            this.resetCustomerInformationState();
            this.step = 5;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        goToStepThree() {
            this.resetCustomerInformationState();
            this.step = 3;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        goToStepFour() {
            this.resetCustomerInformationState();
            this.step = 4;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },

        async onUpdatedUserData(updateData) {

            if (updateData.userData.email && updateData.userData.phoneNumber) {
                this.userInformation.email = updateData.userData.email;
                this.userInformation.phone = updateData.userData.phoneNumber;
            }

        },
        async applyCouponHandler() {

            if (this.preAppointmentResponse.coupon_discount.validation_status === true) {
                this.couponCode = "";
            }
            await this.preAppointment();
        },
        backToBookingSummerty() {
            this.step = 5;
            this.bookingSummery = true;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        selectedParkingName(selectedParking) {
            return this.parkingOptions.find((singleParkingItem) => singleParkingItem.value === selectedParking) ?.name;
        },
        selectedTimeFullName(selectedTimeFullName) {
            return (this.technicianAvailableTimeSlots ?.slots ?? []).find((singleTime) => singleTime.value === selectedTimeFullName) ?.name;
        },
        async getServiceList(serviceParams) {
            const response = await this.getServices(serviceParams);
            if (response ?.message) {
                this.showToastMessage(response);
            }
        },
        async getSettingsList(settingParams) {
            const response = await this.getSettings(settingParams);
            if (response ?.message) {
                this.showToastMessage(response);
            }
        },

        // STEP ONE /SERVICE PREFERENCE
        getServicePreferences() {
            if (this.selectedService ?.name && this.selectedPlatform ?.name && this.issueDetails) {
                this.step++;
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

            }
        },

        // STEP TWO /BOOKING PREFERENCE
        getBookingPreference() {
            if (this.serviceFor && this.serviceType || (this.serviceType === 'onsite' && this.parkingType === 0 || this.parkingType)) {
                this.step++;
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        },

        // STEP THREE /ADDRESS
        // Setting address data in state from Google auto complete
        getAddressData(addressData) {
            this.addressInformation.street = `${(addressData?.street_number) ? addressData?.street_number+' ' : ''}` + addressData ?.route ?? ''.trim();
            this.addressInformation.suburb = addressData ?.locality ?? '';
            this.addressInformation.state = addressData ?.administrative_area_level_1 ?? '';
            this.addressInformation.zipCode = addressData ?.postal_code ?? '';
            this.addressInformation.country = addressData ?.country ?? '';
            this.addressInformation.state = this.addressInformation.state.toLowerCase();
            if (this.addressInformation.state) {

                let addressStateIndex = this.stateList.value.findIndex(item => item.value === this.addressInformation.state);

                if (addressStateIndex !== -1) {
                    let addressState = JSON.parse(JSON.stringify(this.stateList.value[addressStateIndex]));
                    this.selectedState = {
                        name: addressState.name,
                        value: addressState.value
                    };

                }
            }
        },

        async getBookingAddress() {
            if (this.addressInformation.street && this.addressInformation.suburb && this.addressInformation.state && this.addressInformation.zipCode) {
                await this.distanceCalculation(this.addressInformation.street, this.addressInformation.suburb, this.addressInformation.state, this.addressInformation.zipCode, this.addressInformation.country);
                if (this.onSiteAddressDistance.status === false) {
                    this.showToastMessage({
                        type: 'error',
                        message: this.onSiteAddressDistance.message
                    });
                    return false;

                }

                // reset the next step date and time values
                this.selectedDate = "";
                this.selectedTime = "";
                this.step++;
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

            }
        },

        // STEP FOUR /SCHEDULE PREFERENCE
        async getTechnicianTimeSlots(date) {
            this.loader(true);
            const data = {
                panel: 0,
                requested_date: date,
                state: this.selectedState.value,
                preference: this.serviceType === 'remote' ? 1 : 0
            }
            const response = await this.postTechnicianAvailableTimeSlots(data);
            this.loader(false);
            if (response.status === 200) {

                if (this.technicianAvailableTimeSlots.status === true) {
                    return true;
                }
                if (this.technicianAvailableTimeSlots.status === false) {
                    this.showToastMessage({
                        type: 'error',
                        message: this.technicianAvailableTimeSlots.message
                    });
                    return;
                }

            }

        },
        getBookingSchedule() {
            if (this.selectedDate && this.selectedTime) {
                this.step++;
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        },

        // STEP FOUR /INFORMATION
        validateEmail() {
            //eslint-disable-next-line
            let emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
            return emailFormat.test(this.userInformation.email);
        },

        validatePhoneNumber() {
            // eslint-disable-next-line
            let phoneNumberFormat = /^(01|02|03|04|05|06|07|08|09)[0-9]{8}$/;
            return phoneNumberFormat.test(this.userInformation.phone);
        },

        getContactInfo() {
            if (this.userInformation.firstName && this.userInformation.lastName && (this.userInformation.email && this.validateEmail) && (this.userInformation.phone && this.validatePhoneNumber)) {
                this.bookingSummery = true;
            }
        },

        // STEP SIX /PAYMENT
        async distanceCalculation(street, suburb, state, post_code, country) {
            this.loader(true);
            const data = {
                street,
                suburb,
                state,
                post_code,
                country
            }
            const response = await this.postOnSiteAddressDistance(data);
            this.loader(false);

            if (response ?.message) {
                this.showToastMessage(response);
            }

        },
        getPaymentDetails() {
            if (this.agreed || (this.isCouponApplied && this.couponCode)) {
                this.paymentChart = false;
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        },
        openViewDetailsModal(name) {
            this.selectedDetails = name;
            this.$modal.show('view-details-modal');
        },
        closeViewDetailsModal() {
            this.$modal.hide('view-details-modal');
        },
        goBack() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            this.step--;
        },
        async isUserOrCustomerExist() {
            //if mobile have
            if (this.userInformation.phone) {
                const isExistingUserFound = await this.findUser({
                    search_query: this.userInformation.phone,
                    with_relation: ['customer']
                });
                if (isExistingUserFound) {
                    return;
                }

            }

            // if email have
            if (this.userInformation.email) {
                return await this.findUser({
                    search_query: this.userInformation.email,
                    with_relation: ['customer']
                });

            }

        },
        async findUser(data) {
            this.loader(true);
            const existingUserResponse = await this.userFind(data);
            this.loader(false);
            if (existingUserResponse.status === 200) {
                let userId = this.user ?.id ?? null;
                let customerId = this.user ?.customer ?.id ?? null;

                if (userId) {
                    this.showToastMessage({
                        type: 'success',
                        message: "The system detected you as an existing customer ❤️"
                    });
                    this.existingUser = true;
                    this.userInformation.id = userId;
                    this.userInformation.firstName = this.user ?.first_name ?? '';
                    this.userInformation.lastName = this.user ?.last_name ?? '';
                    this.userInformation.phone = this.user ?.phone_number ?? '';
                    this.userInformation.email = this.user ?.email ?? '';
                } else {
                    this.existingUser = false;
                    this.userInformation.id = null;
                }

                if (customerId) {
                    this.existingCustomer = true;
                    this.customerInformation.id = customerId;
                    this.customerInformation.status = this.user ?.customer ?.status ?? '';
                    this.customerInformation.type = this.user ?.customer ?.type ?? '';

                } else {
                    this.existingCustomer = false;
                    this.customerInformation.id = null;
                }

            }

            if (existingUserResponse.message) {
                this.showToastMessage(existingUserResponse);
            }

            if (this.existingUser || this.existingCustomer) {
                return true;
            }

        },
        async getReferrerCustomer() {
            let paramObj = {
                referrerCode: this.referrerCode,
                params: {
                    with_relation: ['user']
                }

            };
            this.loader(true);
            const response = await this.getReferrer(paramObj);
            this.loader(false);
            if (response.status === 200) {
                this.referrerCodeIsValid = true;

            }
            this.referrerCodeIsValid = false;

        },
        async getPersonalDetails() {
            this.errors.firstName = [];
            this.errors.lastName = [];
            this.errors.businessName = [];
            this.referrerCodeIsValid = false;
            this.existingCustomer = false;
            this.existingUser = false;
            this.isExistingUserFindApiCalled = false;

            if (this.serviceFor === 'business' && (!this.businessName)) {

                this.errors.businessName = [];
                this.errors.businessName.push('This field is required');
                return;

            }
            await this.isUserOrCustomerExist();

            if (this.referrerCode) {
                await this.getReferrerCustomer();
            }
            this.isExistingUserFindApiCalled = true;

            if (!this.existingUser) {
                if (!this.userInformation.firstName) {
                    this.errors.firstName = [];
                    this.errors.firstName.push('This field is required');

                }

                if (!this.userInformation.lastName) {
                    this.errors.lastName = [];
                    this.errors.lastName.push('This field is required');

                }
                if ((!this.userInformation.firstName) && (!this.userInformation.lastName)) {
                    return;
                }

            }

            this.bookingSummery = true;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

        },
        backToContactInformation() {
            this.bookingSummery = false;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            if (this.userInformation.id) {
                this.userInformation.firstName = '';
                this.userInformation.lastName = '';
                this.userInformation.id = null;
            }

            // this.userInformation.phone =  '';
            // this.userInformation.email = '';
        },
        async continueBookingHandler() {
            const isClientCreated = await this.createClient();
            if (isClientCreated) {
                this.bookingSummery = false;
                await this.preAppointment();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

        },
        async createClient() {
            if (this.existingUser) {
                const isSingleAddressCreated = await this.createSingleAddress({
                    user_id: this.userInformation.id,
                    street: this.addressInformation.street,
                    suburb: this.addressInformation.suburb,
                    state: this.addressInformation.state,
                    post_code: this.addressInformation.zipCode,
                    country: this.addressInformation.country,
                });
                if (isSingleAddressCreated) {

                    if (this.serviceFor === 'business') {
                        await this.createSingleBusinessAddress({
                            user_id: this.userInformation.id,
                            address_id: this.addressInformation.id,
                            name: this.businessName,
                        });
                    }

                    // existing customer found conditions
                    let customer = this.customerInformation;
                    let customerId = this.customerInformation.id;

                    // if customer is inactive
                    if (customerId && customer.status !== "Active") {
                        this.showToastMessage({
                            type: 'error',
                            message: 'Please contact with our helpline'
                        })
                        return false;
                    }

                    // if customer type is already business
                    if (customerId && (customer.type === "Business")) {

                        return true;
                    }

                    //if customer type is home and client selected service is business
                    if (customerId && customer.type === "Home" && this.serviceFor === 'business') {
                        // update customer type to Business
                        return await this.updateCustomer({
                            id: customerId,
                            data: {
                                type: 2,
                            }
                        });

                    }

                    //if customer type is home and client selected service is home
                    if (customerId && customer.type === "Home" && this.serviceFor === 'home') {
                        // update customer type to Business
                        return true;
                    }

                    //if customer type is Guest
                    if (customerId && customer.type === "Guest") {
                        // update customer type to as client selected.
                        // return await this.updateCustomer(customerId, this.serviceFor === 'business' ? 2 : 1);
                        return await this.updateCustomer({
                            id: customerId,
                            data: {
                                type: this.serviceFor === 'business' ? 2 : 1,
                            }
                        });
                    }
                    //

                    // create customer.
                    const postCustomerData = {
                        address_id: this.addressInformation.id,
                        user_id: this.userInformation.id,
                        type: this.serviceFor === 'home' ? 1 : 2,
                        newsletter_subscription: 1,
                        status: 1,
                    }
                    if (this.referrerCodeIsValid && (this.$store.getters['customers/referrerCustomer'] ?.user ?.id ?? undefined)) {
                        postCustomerData.referred_by = this.$store.getters['customers/referrerCustomer'] ?.user ?.id;
                    }
                    return await this.createSingleCustomer(postCustomerData);

                }
                return false;

            }
            // if not existing user
            else {
                const postUserData = {
                    role_id: this.settingDefaultCustomerRole.value.value !== undefined ? parseInt(this.settingDefaultCustomerRole.value.value) : '',
                    first_name: this.userInformation.firstName,
                    last_name: this.userInformation.lastName,
                    email: this.userInformation.email,
                    phone_number: this.userInformation.phone,
                };
                this.loader(true);
                const response = await this.postUser(postUserData);
                this.loader(false);
                if (response.status === 200 || response.status === 201) {

                    this.userInformation.id = this.user ?.id ?? null;
                    this.userInformation.firstName = this.user ?.first_name ?? '';
                    this.userInformation.lastName = this.user ?.last_name ?? '';
                    this.userInformation.phone = this.user ?.phone_number ?? '';
                    this.userInformation.email = this.user ?.email ?? '';
                    this.existingUser = true;

                    const isSingleAddressCreated = await this.createSingleAddress({
                        user_id: this.userInformation.id,
                        street: this.addressInformation.street,
                        suburb: this.addressInformation.suburb,
                        state: this.addressInformation.state,
                        post_code: this.addressInformation.zipCode,
                        country: this.addressInformation.country,
                    });

                    if (isSingleAddressCreated) {

                        if (this.serviceFor === 'business') {
                            await this.createSingleBusinessAddress({
                                user_id: this.userInformation.id,
                                address_id: this.addressInformation.id,
                                name: this.businessName,
                            });
                        }

                        // for new user
                        const postCustomerData = {
                            address_id: this.addressInformation.id,
                            user_id: this.userInformation.id,
                            type: this.serviceFor === 'home' ? 1 : 2,
                            newsletter_subscription: 1,
                            status: 1,
                        }
                        if (this.referrerCodeIsValid && (this.$store.getters['customers/referrerCustomer'] ?.user ?.id ?? undefined)) {
                            postCustomerData.referred_by = this.$store.getters['customers/referrerCustomer'] ?.user ?.id;
                        }
                        // create customer
                        return await this.createSingleCustomer(postCustomerData);
                        // let user = this.$store.getters['appUsers/user'];

                    }
                    return false;
                }

                if (response.message) {
                    this.showToastMessage(response);
                }
                this.loader(false);
                return false;
            }

        },

        // address create
        async createSingleAddress(postAddressData) {

            this.loader(true);
            const response = await this.postAddress(postAddressData);
            if (response.status === 200 || response.status === 201) {
                this.addressInformation.id = this.address.id;
                this.loader(false);
                return true;

            }
            if (response.message) {
                this.showToastMessage(response);
            }

            return false;
        },

        async createSingleBusinessAddress(postBusinessData) {

            this.loader(true);
            const response = await this.postBusiness(postBusinessData);
            this.loader(false);

            if (response.status === 200 || response.status === 201) {

                // this.showToastMessage(toastObj);
                return true;

            }

            if (response.message) {
                this.showToastMessage(response);
            }

            return false;
        },

        async createSingleCustomer(postCustomerData) {
            this.loader(true);

            const response = await this.postCustomer(postCustomerData);
            this.loader(false);
            if (response.status === 201) {
                this.customerInformation.id = this.customer.id;
                this.customerInformation.status = this.customer ?.status ?? '';
                this.customerInformation.type = this.customer ?.type ?? '';
                this.existingCustomer = true;
                this.loyaltyCustomerRegistration();
                if (this.referrerCodeIsValid) {
                    this.loyaltyCustomerReferrer();
                }
                return true;

            }

            if (response.message) {
                this.showToastMessage(response);
            }

            return false;
        },
        async updateCustomer(dataObj) {
            this.loader(true);

            const response = await this.putCustomer(dataObj);
            this.loader(false);
            if (response.status === 200) {
                // const toastObj = {
                //     message: "Customer's newsletter subscription status updated",
                //     type: 'success'
                // };
                // this.showToastMessage(toastObj);
                return true;
            }
            if (response.message) {
                this.showToastMessage(response);
            }

            return false;

        },

        loyaltyCustomerRegistration() {
            this.postLoyaltyCustomerRegistration({
                customer_id: this.customerInformation.id
            });
        },
        loyaltyCustomerReferrer() {
            this.postLoyaltyCustomerRefferar({
                customer_id: this.customerInformation.id
            });
        },

        async preAppointment() {

            this.loader(true);

            let data = {
                preference: this.serviceType === 'remote' ? 1 : 0,
                type: this.serviceFor === 'business' ? 1 : 0,
                street: this.addressInformation.street,
                suburb: this.addressInformation.suburb,
                post_code: this.addressInformation.zipCode,
                country: this.addressInformation.country,
                state: this.addressInformation.state,
                service_id: this.selectedService ?.id,
                date: this.selectedDate,
                time: this.selectedTime,
                coupon_code: this.isCouponApplied ? this.couponCode : '',
                parking_type: this.parkingType ? this.parkingType : 0,
                client_panel: 0,
                user_id: this.userInformation.id,

            };
            if (this.isCreditApplied && this.creditCode) {
              data = {...data, credited_payment_discount_amount: this.creditCode * 100};

            }
            const response = await this.preStoreAppointmentData(data);
            this.loader(false);
            if (response && response.status === 200) {

                if (response.data.status === true) {

                    this.preAppointmentResponse.status = response.data.status;
                    this.preAppointmentResponse.message = response.data.message;
                    this.preAppointmentResponse.service_price = response.data.service_price;
                    this.preAppointmentResponse.remaining_credited_payment = response.data.remaining_credited_payment;

                    this.preAppointmentResponse.same_day_surcharge.applied_status = response.data.same_day_surcharge.applied_status;
                    this.preAppointmentResponse.same_day_surcharge.amount = response.data.same_day_surcharge.amount;

                    this.preAppointmentResponse.timebase_surcharge.applied_status = response.data.timebase_surcharge.applied_status;
                    this.preAppointmentResponse.timebase_surcharge.amount = response.data.timebase_surcharge.amount;

                    this.preAppointmentResponse.distance_surcharge.applied_status = response.data.distance_surcharge.applied_status;
                    this.preAppointmentResponse.distance_surcharge.distance_value = response.data.distance_surcharge.distance_value;
                    this.preAppointmentResponse.distance_surcharge.distance_value_in_km = response.data.distance_surcharge.distance_value_in_km;
                    this.preAppointmentResponse.distance_surcharge.amount = response.data.distance_surcharge.amount;

                    this.preAppointmentResponse.holiday_surcharge.applied_status = response.data.holiday_surcharge.applied_status;
                    this.preAppointmentResponse.holiday_surcharge.amount = response.data.holiday_surcharge.amount;

                    this.preAppointmentResponse.fuel_levy.applied_status = response.data.fuel_levy.applied_status;
                    this.preAppointmentResponse.fuel_levy.amount = response.data.fuel_levy.amount;

                    this.preAppointmentResponse.city_area_surcharge.applied_status = response.data.city_area_surcharge.applied_status;
                    this.preAppointmentResponse.city_area_surcharge.amount = response.data.city_area_surcharge.amount;

                    this.preAppointmentResponse.weekend_surcharge.amount = response.data.weekend_surcharge.amount;
                    this.preAppointmentResponse.weekend_surcharge.applied_status = response.data.weekend_surcharge.applied_status;

                    this.preAppointmentResponse.total_surcharge_amount = response.data.total_surcharge_amount;
                    this.preAppointmentResponse.subtotal_amount = response.data.subtotal_amount;

                    this.preAppointmentResponse.applied_discount.applied_status = response.data.applied_discount.applied_status;
                    this.preAppointmentResponse.applied_discount.amount = response.data.applied_discount.amount;

                    this.preAppointmentResponse.coupon_discount.amount = response.data.coupon_discount.amount;
                    this.preAppointmentResponse.coupon_discount.applied_status = response.data.coupon_discount.applied_status;
                    this.preAppointmentResponse.coupon_discount.validation_status = response.data.coupon_discount.validation_status;
                    if (this.preAppointmentResponse.coupon_discount.applied_status === true && (this.preAppointmentResponse.coupon_discount.validation_status === false || this.preAppointmentResponse.coupon_discount.validation_status === true)) {
                        this.showToastMessage({
                            message: response.data.coupon_discount.message,
                            type: `${this.preAppointmentResponse.coupon_discount.validation_status === false ? 'error' : 'success'}`
                        });
                    }

                    this.preAppointmentResponse.coupon_discount.message = response.data.coupon_discount.message;
                    this.preAppointmentResponse.coupon_discount.apply_on = response.data.coupon_discount.apply_on;
                    this.preAppointmentResponse.coupon_discount.coupon_code = response.data.coupon_discount.coupon_code;
                    this.preAppointmentResponse.coupon_discount.coupon_id = response.data.coupon_discount.coupon_id;

                    this.preAppointmentResponse.credited_payment_discount.applied_status = response.data.credited_payment_discount.applied_status;
                    this.preAppointmentResponse.credited_payment_discount.validation_status = response.data.credited_payment_discount.validation_status;
                    this.preAppointmentResponse.credited_payment_discount.amount = response.data.credited_payment_discount.amount;
                    this.preAppointmentResponse.credited_payment_discount.message = response.data.credited_payment_discount.message;


                    if (this.preAppointmentResponse.credited_payment_discount.applied_status === true && (this.preAppointmentResponse.credited_payment_discount.validation_status === false || this.preAppointmentResponse.credited_payment_discount.validation_status === true)) {
                        this.showToastMessage({
                            message: response.data.credited_payment_discount.message,
                            type: `${this.preAppointmentResponse.credited_payment_discount.validation_status === false ? 'error' : 'success'}`
                        });
                    }

                    this.preAppointmentResponse.online_appointment_discount.applied_status = response.data.online_appointment_discount.applied_status;
                    this.preAppointmentResponse.online_appointment_discount.amount = response.data.online_appointment_discount.amount;

                    this.preAppointmentResponse.parking_discount.applied_status = response.data.parking_discount.applied_status;
                    this.preAppointmentResponse.parking_discount.amount = response.data.parking_discount.amount;

                    this.preAppointmentResponse.loyalty_discount.applied_status = response.data.loyalty_discount.applied_status;
                    this.preAppointmentResponse.loyalty_discount.amount = response.data.loyalty_discount.amount;

                    this.preAppointmentResponse.total_discount_amount = response.data.total_discount_amount;

                    this.preAppointmentResponse.gst_charge.amount = response.data.gst_charge.amount;
                    this.preAppointmentResponse.gst_charge.applied_status = response.data.gst_charge.applied_status;

                    this.preAppointmentResponse.grand_total = response.data.grand_total;

                    await this.getAvailableValidCouponsHandler();


                    if (this.step === 5) {
                        this.paymentChart = true;
                        this.step++;
                    }


                } else {
                    this.showToastMessage({
                        message: response.data.message,
                        type: "error"
                    });
                }

            } else {
                this.showToastMessage({
                    message: response.message,
                    type: "error"
                });

            }

        },
        async createAppointmentPaymentHandler() {

            if (!this.paymentType) {
                this.showToastMessage({
                    type: 'error',
                    message: 'Please select payment type'
                });
            }
            if (this.paymentType === "cardPayment") {
                if (this.settingAppointmentOnlineAppointmentWithoutPaymentStatus ?.value === '1') {
                    await this.createAppointmentBeforeCardPayment();
                }
                if (this.settingAppointmentOnlineAppointmentWithoutPaymentStatus ?.value === '0') {
                    await this.createAppointmentAfterCardPayment();
                }
                // await this.createAppointmentByCardPayment();
            }
            if (this.paymentType === "afterPayPayment") {
                if (!(this.userInformation.email && this.userInformation.phone)) {
                    this.showToastMessage({
                        type: 'error',
                        message: 'For afterpay payment you must provide your email & phone number !'
                    });
                    return false;
                }
                if (this.settingAppointmentOnlineAppointmentWithoutPaymentStatus ?.value === '1') {
                    await this.createAppointmentBeforeAfterPayPayment();
                }
                if (this.settingAppointmentOnlineAppointmentWithoutPaymentStatus ?.value === '0') {
                    await this.createAppointmentAfterAfterPayPayment();
                }

            }

        },

        async createAppointmentAfterCardPayment() {

            this.simplifyPaymentGatewayId = "";

            let isTokenCreated = await this.tokenCreate();

            if (isTokenCreated) {
                const isPaymentCreatedByToken = await this.createPaymentByToken();
                if (isPaymentCreatedByToken) {

                    const isPaymentCreated = await this.createPayment(`Temporal reference for customer id : ${this.customerInformation.id} `);
                    if (isPaymentCreated) {
                        const isCardPaymentDone = await this.createCardPayment();
                        if (isCardPaymentDone) {

                            const isAppointmentCreated = await this.createAppointment();
                            if (isAppointmentCreated) {
                                this.putPaymentReference()
                                const isAppointmentChargeCreated = await this.createAppointmentCharges();
                                if (isAppointmentChargeCreated) {

                                    const isAppointmentNotesCreated = await this.createAppointmentNotes();
                                    if (isAppointmentNotesCreated) {

                                        const isAppointmentPaymentDone = await this.createAppointmentPayments();
                                        if (isAppointmentPaymentDone) {
                                            await this.appointmentCreatorsCreate();
                                            this.appointmentPaymentEmailNotify();
                                            this.appointmentEmailNotify();

                                            await this.createAppointmentDiscountStoreList();
                                            await this.appointmentHistory();
                                            if (this.preAppointmentResponse.coupon_discount.validation_status === true) {
                                                await this.createCouponUsage();
                                            }

                                            await this.paymentSuccedRedirectHandler();
                                        }

                                    }

                                }

                            }

                        }

                    }

                }

            }

        },

        async createAppointmentBeforeCardPayment() {

            this.simplifyPaymentGatewayId = "";

            const isAppointmentCreated = await this.createAppointment();
            if (isAppointmentCreated) {

                // this.putPaymentReference()
                const isAppointmentChargeCreated = await this.createAppointmentCharges();
                if (isAppointmentChargeCreated) {

                    const isAppointmentNotesCreated = await this.createAppointmentNotes();
                    if (isAppointmentNotesCreated) {
                        const isAppointmentCreatorCreated = await this.appointmentCreatorsCreate();
                        if (isAppointmentCreatorCreated) {
                            const isAppointemntHistoryCreated = await this.appointmentHistory();
                            // this.appointmentEmailNotify();
                            if (isAppointemntHistoryCreated) {
                                const isAppointmentDiscountStoreListCreated = await this.createAppointmentDiscountStoreList();
                                if (isAppointmentDiscountStoreListCreated) {
                                    let isTokenCreated = await this.tokenCreate();
                                    if (isTokenCreated) {
                                        const isPaymentCreatedByToken = await this.createPaymentByToken();
                                        if (isPaymentCreatedByToken) {
                                            const isPaymentCreated = await this.createPayment(this.appointment.reference);
                                            if (isPaymentCreated) {
                                                const isCardPaymentDone = await this.createCardPayment();
                                                if (isCardPaymentDone) {
                                                    const isAppointmentPaymentDone = await this.createAppointmentPayments();
                                                    if (isAppointmentPaymentDone) {

                                                        this.appointmentPaymentEmailNotify();
                                                        this.appointmentEmailNotify();
                                                        if (this.preAppointmentResponse.coupon_discount.validation_status === true) {
                                                            await this.createCouponUsage();
                                                        }
                                                        // this.preAppointmentResponse.coupon_discount.validation_status === true && (this.createCouponUsage());
                                                        // await this.appointmentCreatorsCreate();
                                                        // await this.appointmentHistory();
                                                        await this.paymentSuccedRedirectHandler();

                                                    }

                                                }

                                            }
                                        }
                                    }
                                }

                            }

                        }

                    }

                }

            }

        },
        async createAppointmentBeforeAfterPayPayment() {
            const isAppointmentCreated = await this.createAppointment();
            if (isAppointmentCreated) {
                // this.putPaymentReference()
                const isAppointmentChargeCreated = await this.createAppointmentCharges();
                if (isAppointmentChargeCreated) {

                    const isAppointmentNotesCreated = await this.createAppointmentNotes();
                    if (isAppointmentNotesCreated) {
                        const isAppointmentCreatorCreated = await this.appointmentCreatorsCreate();
                        if (isAppointmentCreatorCreated) {
                            const isAppointemntHistoryCreated = await this.appointmentHistory();
                            if (isAppointemntHistoryCreated) {
                                const isAppointmentDiscountStoreListCreated = await this.createAppointmentDiscountStoreList();
                                if (isAppointmentDiscountStoreListCreated) {
                                    let isAfterPayServerActive = await this.afterPayServerStatusChecker();

                                    if (isAfterPayServerActive) {
                                        const isPaymentConfigurationSuccessful = await this.afterPayPaymentConfiguration();

                                        if (isPaymentConfigurationSuccessful) {

                                            const isCheckoutSuccess = await this.afterPayPaymentCheckout();
                                            if (isCheckoutSuccess) {
                                                window.AfterPay.initialize({
                                                    countryCode: "AU"
                                                });

                                                window.AfterPay.open();

                                                window.AfterPay.onComplete = async (event) => {
                                                    if (event.data.status == "SUCCESS") {
                                                        const isCaptureImmediateFullPaymentOfAfterPaySucceed = await this.captureImmediateFullPaymentOfAfterPay();
                                                        if (isCaptureImmediateFullPaymentOfAfterPaySucceed) {

                                                            const isPaymentCreated = await this.createPayment(this.appointment.reference);
                                                            if (isPaymentCreated) {
                                                                const isAppointmentAfterPayPaymentDone = await this.createAfterPayPayment();
                                                                if (isAppointmentAfterPayPaymentDone) {
                                                                    const isAppointmentPaymentDone = await this.createAppointmentPayments();
                                                                    if (isAppointmentPaymentDone) {
                                                                        localStorage.removeItem('bookingData');
                                                                        // this.createAppointmentDiscountStoreList();
                                                                        this.appointmentEmailNotify();
                                                                        this.appointmentPaymentEmailNotify();
                                                                        if (this.preAppointmentResponse.coupon_discount.validation_status === true) {
                                                                            await this.createCouponUsage();
                                                                        }
                                                                        // this.preAppointmentResponse.coupon_discount.validation_status === true && (this.createCouponUsage());
                                                                        // await this.appointmentCreatorsCreate();
                                                                        // await this.appointmentHistory();
                                                                        await this.paymentSuccedRedirectHandler();

                                                                    }

                                                                }

                                                            }

                                                        }

                                                    } else {
                                                        console.log(event)
                                                        // The consumer cancelled the payment or closed the popup window.
                                                        this.showToastMessage({
                                                            type: 'error',
                                                            message: event.data.status
                                                        })
                                                    }
                                                }

                                                window.AfterPay.transfer({
                                                    token: this.checkout.token
                                                });

                                            }

                                        }

                                    }
                                }

                            }

                        }

                        // this.putUpdatePaymentByOrderId();

                    }

                }

            }

        },
        async createAppointmentAfterAfterPayPayment() {

            let isAfterPayServerActive = await this.afterPayServerStatusChecker();

            if (isAfterPayServerActive) {
                const isPaymentConfigurationSuccessful = await this.afterPayPaymentConfiguration();

                if (isPaymentConfigurationSuccessful) {

                    const isCheckoutSuccess = await this.afterPayPaymentCheckout();
                    if (isCheckoutSuccess) {
                        window.AfterPay.initialize({
                            countryCode: "AU"
                        });

                        window.AfterPay.open();

                        window.AfterPay.onComplete = async (event) => {
                            if (event.data.status == "SUCCESS") {
                                const isCaptureImmediateFullPaymentOfAfterPaySucceed = await this.captureImmediateFullPaymentOfAfterPay();
                                if (isCaptureImmediateFullPaymentOfAfterPaySucceed) {

                                    this.showToastMessage({
                                        message: 'Payment successful',
                                        type: 'success'
                                    });

                                    const isPaymentCreated = await this.createPayment(`Temporal reference for customer id : ${this.customerInformation.id}`);
                                    if (isPaymentCreated) {
                                        const isAppointmentAfterPayPaymentDone = await this.createAfterPayPayment();
                                        if (isAppointmentAfterPayPaymentDone) {

                                            const isAppointmentCreated = await this.createAppointment();
                                            if (isAppointmentCreated) {
                                                this.putPaymentReference()
                                                const isAppointmentChargeCreated = await this.createAppointmentCharges();
                                                if (isAppointmentChargeCreated) {

                                                    const isAppointmentNotesCreated = await this.createAppointmentNotes();
                                                    if (isAppointmentNotesCreated) {
                                                        this.putUpdatePaymentByOrderId();

                                                        const isAppointmentPaymentDone = await this.createAppointmentPayments();
                                                        if (isAppointmentPaymentDone) {
                                                            localStorage.removeItem('bookingData');
                                                            await this.appointmentCreatorsCreate();
                                                            this.appointmentPaymentEmailNotify();
                                                            this.appointmentEmailNotify();

                                                            await this.createAppointmentDiscountStoreList();
                                                            await this.appointmentHistory();
                                                            if (this.preAppointmentResponse.coupon_discount.validation_status === true) {
                                                                await this.createCouponUsage();
                                                            }

                                                            await this.paymentSuccedRedirectHandler();

                                                        }

                                                    }

                                                }

                                            }

                                        }

                                    }

                                }

                            } else {
                                console.log(event)
                                // The consumer cancelled the payment or closed the popup window.
                                this.showToastMessage({
                                    type: 'error',
                                    message: event.data.status
                                })
                            }
                        }

                        window.AfterPay.transfer({
                            token: this.checkout.token
                        });

                    }

                }

            }

        },
        async captureImmediateFullPaymentOfAfterPay() {
            const data = {
                token: this.checkout.token
            }
            this.loader(true);
            const response = await this.captureImmediateFullPayment(data);

            this.loader(false);
            if (response.message) {
                this.showToastMessage(response);
            }
            if (this.afterpayPaymentGateway.status !== "APPROVED") {
                this.showToastMessage({
                    type: 'error',
                    message: this.afterpayPaymentGateway.status + ' : Payment is declined by the Afterpay'
                });
            }
            if (this.afterpayPaymentGateway.status === "APPROVED") {
                this.showToastMessage({
                    type: 'success',
                    message: this.afterpayPaymentGateway.status + ' : Payment is approved by the Afterpay'
                });
            }
            if (response.status !== 201 && this.afterpayPaymentGateway.status !== "APPROVED" && this.settingAppointmentOnlineAppointmentWithoutPaymentStatus ?.value === '1') {
                await this.paymentFailedRedirectHandler();
            }

            return (response.status === 201 && this.afterpayPaymentGateway.status === "APPROVED");
        },
        async createAfterPayPayment() {
            const data = {
                payment_id: this.payment.id,
                paid_by: this.userInformation.id,
                amount: this.preAppointmentResponse.grand_total,
                token: this.checkout.token,
                payment_gateway_id: this.afterpayPaymentGateway.id,
                status: 1,

            }
            this.loader(true);
            const response = await this.postAfterpayPayment(data);
            if (response.message) {
                this.showToastMessage(response);
            }
            this.loader(false);
            if (response.status !== 201 && this.settingAppointmentOnlineAppointmentWithoutPaymentStatus ?.value === '1') {
                await this.paymentFailedRedirectHandler();
            }
            return response.status === 201
        },

        putUpdatePaymentByOrderId() {
            const data = {
                id: this.afterpayPaymentGateway.id,
                data: {
                    merchantReference: this.appointment.reference,
                }

            }
            // this.loader(true);
            const response = this.updatePaymentByOrderId(data);
            // this.loader(false);
            if (response.message) {
                this.showToastMessage(response);
            }
            // return response.status === 200
        },

        async paymentFailedRedirectHandler() {
            await this.appointmentEmailNotify();
            this.showToastMessage({
                message: 'Appointment created successfully',
                type: 'success'
            });

            await this.$router.push({
                name: 'appointment-booking-success',
                params: {
                    routeName: this.$route.name,
                    reference: this.appointment.reference,
                    description: `Your payment is failed. Dont't worry one of our team will be in contact with you shortly.`
                }
            })
        },
        async paymentSuccedRedirectHandler() {

            this.showToastMessage({
                message: 'Appointment created successfully',
                type: 'success'
            });

            this.showToastMessage({
                message: 'Payment successful',
                type: 'success'
            });
            await this.$router.push({
                name: 'appointment-booking-success',
                params: {
                    routeName: this.$route.name,
                    reference: this.appointment.reference,
                    description: ``
                }
            })
        },

        async createAppointment() {
            const data = {
                customer_id: this.customerInformation.id,
                address_id: this.addressInformation.id,
                billing_address_id: this.addressInformation.id,
                service_id: this.selectedService.id !== undefined ? this.selectedService.id : '',
                unit_price: this.preAppointmentResponse.service_price, // business_id: business_id,
                platform: this.selectedPlatform.value,
                type: this.serviceFor === 'business' ? 1 : 0,
                date: this.selectedDate,
                time: this.selectedTime,
                status: 0,
                parking: this.parkingType ? this.parkingType : 0,
                preference: this.serviceType === 'remote' ? 1 : 0,
            };
            this.loader(true);
            const response = await this.postAppointment(data);
            this.loader(false);

            if (response.message) {
                this.showToastMessage(response);
            }

            return response.status === 201;
        },
        async createAppointmentCharges() {
            const charges = [];
            if (this.preAppointmentResponse.gst_charge.applied_status) {
                charges.push({
                    "amount": this.preAppointmentResponse.gst_charge.amount,
                    "type": 3,
                    "name": "GST"
                });
            }

            if (this.preAppointmentResponse.coupon_discount.applied_status) {
                charges.push({
                    "amount": this.preAppointmentResponse.coupon_discount.amount,
                    "type": 2,
                    "name": "Coupon Discount"
                });
            }
            if (this.preAppointmentResponse.applied_discount.applied_status) {
                charges.push({
                    "amount": this.preAppointmentResponse.applied_discount.amount,
                    "type": 2,
                    "name": "Applied Discount"
                });
            }
            if (this.preAppointmentResponse.credited_payment_discount.applied_status) {
                charges.push({
                    "amount": this.preAppointmentResponse.credited_payment_discount.amount,
                    "type": 2,
                    "name": "Credited Payment Discount"
                });
            }
            if (this.preAppointmentResponse.parking_discount.applied_status) {
                charges.push({
                    "amount": this.preAppointmentResponse.parking_discount.amount,
                    "type": 2,
                    "name": "Parking Discount"
                });
            }
            if (this.preAppointmentResponse.loyalty_discount.applied_status) {
                charges.push({
                    "amount": this.preAppointmentResponse.loyalty_discount.amount,
                    "type": 2,
                    "name": "Loyalty Discount"
                });
            }
            if (this.preAppointmentResponse.online_appointment_discount.applied_status) {
                charges.push({
                    "amount": this.preAppointmentResponse.online_appointment_discount.amount,
                    "type": 2,
                    "name": "Online Appointment Discount"
                });
            }

            if (this.preAppointmentResponse.distance_surcharge.applied_status && this.preAppointmentResponse.distance_surcharge.amount > 0) {
                charges.push({
                    "amount": this.preAppointmentResponse.distance_surcharge.amount,
                    "type": 1,
                    "name": "Distance Surcharge"
                });
            }
            if (this.preAppointmentResponse.holiday_surcharge.applied_status) {
                charges.push({
                    "amount": this.preAppointmentResponse.holiday_surcharge.amount,
                    "type": 1,
                    "name": "Holiday Surcharge"
                });
            }
            if (this.preAppointmentResponse.fuel_levy.applied_status) {
                charges.push({
                    "amount": this.preAppointmentResponse.fuel_levy.amount,
                    "type": 1,
                    "name": "Fuel Levy Surcharge"
                });
            }
            if (this.preAppointmentResponse.city_area_surcharge.applied_status) {
                charges.push({
                    "amount": this.preAppointmentResponse.city_area_surcharge.amount,
                    "type": 1,
                    "name": "City Area Surcharge"
                });
            }
            if (this.preAppointmentResponse.same_day_surcharge.applied_status) {
                charges.push({
                    "amount": this.preAppointmentResponse.same_day_surcharge.amount,
                    "type": 1,
                    "name": "Same Day Surcharge"
                });
            }
            if (this.preAppointmentResponse.timebase_surcharge.applied_status) {
                charges.push({
                    "amount": this.preAppointmentResponse.timebase_surcharge.amount,
                    "type": 1,
                    "name": "Timebase Surcharge"
                });
            }
            if (this.preAppointmentResponse.weekend_surcharge.applied_status) {
                charges.push({
                    "amount": this.preAppointmentResponse.weekend_surcharge.amount,
                    "type": 1,
                    "name": "Weekend Surcharge"
                });
            }

            if (this.preAppointmentResponse.service_price) {
                charges.push({
                    "amount": this.preAppointmentResponse.service_price,
                    "type": 0,
                    "name": "Service Charge"
                });
            }

            const data = {

                appointment_id: this.appointment.id,
                charges: charges,
            };
            this.loader(true);
            const response = await this.postAppointmentCharge(data);
            this.loader(false);
            if (response.message) {
                this.showToastMessage(response);
            }
            return ((response ?.status === 200) || (response ?.status === 201));

        },
        async createAppointmentNotes() {
            const data = {
                user_id: this.userInformation.id,
                appointment_id: this.appointment.id,
                user_type: 0,
                type: 0,
                description: this.issueDetails
            };
            this.loader(true);
            const response = await this.postAppointmentNotes(data);

            if (response.message) {
                this.showToastMessage(response);
            }
            return response.status === 201;

        },
        async appointmentCreatorsCreate() {
            const data = {
                user_id: this.userInformation.id,
                appointment_id: this.appointment.id,
                panel: 0
            };
            this.loader(true);
            const response = await this.appointmentCreators(data);
            this.loader(false);

            if (response.message) {
                this.showToastMessage(response);
            }
            return response.status === 201
        },
        async appointmentHistory() {
            const data = {
                user_id: this.userInformation.id,
                appointment_id: this.appointment.id,
                panel: 0,
                status: 0,
            };
            this.loader(true);
            const response = await this.postAppointmentHistory(data);
            this.loader(false);
            if (response.message) {
                this.showToastMessage(response);
            }

            return response.status === 201;

        },

        async createAppointmentDiscountStoreList() {
            /*
              0:Credited Payment,
              1:Applied on Subtotal,
              2:Applied on Shipping Fee,
              3:Coupon on Subtotal,
              4:Coupon on Shipping Fee,
              5:Parking,
              6:Online Appointment
              7:Loyalty Discount
              */
            let discountsArray = [];

            if (this.preAppointmentResponse.coupon_discount.applied_status) {
                discountsArray.push({
                    "amount": this.preAppointmentResponse.coupon_discount.amount,
                    "type": 3,
                });
            }
            if (this.preAppointmentResponse.applied_discount.applied_status) {
                discountsArray.push({
                    "amount": this.preAppointmentResponse.applied_discount.amount,
                    "type": 1,

                });
            }
            if (this.preAppointmentResponse.credited_payment_discount.applied_status) {
                discountsArray.push({
                    "amount": this.preAppointmentResponse.credited_payment_discount.amount,
                    "type": 0,

                });
            }
            if (this.preAppointmentResponse.loyalty_discount.applied_status) {
                discountsArray.push({
                    "amount": this.preAppointmentResponse.loyalty_discount.amount,
                    "type": 7,
                });
            }
            if (this.preAppointmentResponse.online_appointment_discount.applied_status) {
                discountsArray.push({
                    "amount": this.preAppointmentResponse.online_appointment_discount.amount,
                    "type": 6,
                });
            }
            if (discountsArray.length === 0) {
                return;
            }
            const dataObj = {
                user_id: this.userInformation.id,
                reference: this.appointment.reference,
                discounts: discountsArray
            }
            this.loader(true);
            const response = await this.postDiscountStoreList(dataObj);
            this.loader(false);
            if (response.message) {

                this.showToastMessage(response);
            }

            return response.status === 201;
        },

        async tokenCreate() {

            const data = {
                card_name: this.cardName,
                card_number: this.cardNumber,
                card_expire_month: this.cardExpireMonth,
                card_expire_year: this.cardExpireYear,
                card_cvc: this.cardCvc,
            }
            this.loader(true);
            const response = await this.cardTokenCreate(data);
            this.loader(false);
            if (response.status === 200 || response.status === 201) {
                this.cardTokenBackendErrors = {};
                this.cardTokenResponse.id = response.data.id;
                this.cardTokenResponse.used = response.data.used;
                this.cardTokenResponse.card = response.data.card;
                this.cardTokenResponse.payment_gateway = response.data.payment_gateway;
                if (response.data.used === false) {
                    let cardType = this.cardTokenResponse.card.type;
                    this.settingPaymentCardSurcharge.map((item) => {
                        if (cardType.toLowerCase() === item.name.toLowerCase()) {
                            this.cardSurcharge = parseInt(parseFloat(this.preAppointmentResponse.grand_total) * (parseInt(item.rate) / 100));
                        }
                    })
                    return true;
                }

            } else {

                this.cardTokenResponse.id = '';
                this.cardTokenResponse.used = '';
                this.cardTokenResponse.card = {};
                this.cardTokenResponse.payment_gateway = '';
                this.cardTokenBackendErrors = response.errors;
                // for (const key in this.cardTokenBackendErrors) {

                //     this.cardTokenBackendErrors[key].forEach(error => {
                //         this.showToastMessage({
                //             type: 'error',
                //             message: error
                //         });
                //     });
                // }
                if (this.settingAppointmentOnlineAppointmentWithoutPaymentStatus ?.value === '1') {
                    await this.paymentFailedRedirectHandler();
                }

            }

            if (response.message) {
                this.showToastMessage(response);
            }
            return false;

        },
        async createPaymentByToken() {

            this.loader(true);
            let data = {
                currency: 'AUD',
                reference: 'Online Appointment Form',
                amount: this.preAppointmentResponse.grand_total + (this.cardSurcharge),
                description: `${this.userInformation.firstName} ${this.userInformation.lastName} paid ${this.preAppointmentResponse.grand_total + (this.cardSurcharge)} from online appointment form`,

                card_token: this.cardTokenResponse.id,
            }
            //   description: `Online customer(${this.existingCustomer ? this.user.customer.id : this.customer.id}) paid $A ${this.preAppointmentResponse.grand_total + (this.cardSurcharge)} from Web`,
            const response = await this.paymentCreateByToken(data);
            this.loader(false);
            if (response.status === 201 || response.status === 200) {
                this.simplifyPaymentGatewayId = response.data.id;
                if (response.data.payment_status === 'APPROVED') {

                    return true;
                }

            }
            if (response.message) {
                this.showToastMessage(response);
            }
            this.showToastMessage({
                type: 'error',
                message: 'Card Declined'
            });
            if (this.settingAppointmentOnlineAppointmentWithoutPaymentStatus ?.value === '1') {
                await this.paymentFailedRedirectHandler();
            }

            return false;

        },
        async createPayment(ref) {
            const data = {
                reference: ref,
                panel: 0,
            }
            this.loader(true);

            const response = await this.postPayment(data);
            if (response.message) {
                this.showToastMessage(response);
            }
            this.loader(false);
            if (response.status !== 201) {
                await this.paymentFailedRedirectHandler();
            }
            return response.status === 201;
        },
        async createCardPayment() {
            const data = {
                payment_id: this.payment.id,
                paid_by: this.userInformation.id,
                amount: this.preAppointmentResponse.grand_total,
                card_type: this.cardTokenResponse.card.type,
                card_surcharge: (this.cardSurcharge),
                payment_gateway: this.cardTokenResponse.payment_gateway,
                payment_gateway_id: this.simplifyPaymentGatewayId,
                status: 1,

            }
            this.loader(true);
            const response = await this.postCardPayment(data);
            if (response.message) {
                this.showToastMessage(response);
            }
            this.loader(false);
            if (response.status !== 201 && this.settingAppointmentOnlineAppointmentWithoutPaymentStatus ?.value === '1') {
                await this.paymentFailedRedirectHandler();
            }
            return response.status === 201
        },
        putPaymentReference() {
            const data = {
                id: this.payment.id,
                data: {
                    reference: this.appointment.reference,
                }

            }
            // this.loader(true);
            this.putPayment(data);
            // this.loader(false);

            // return response.status === 200
        },
        async createAppointmentPayments() {
            const data = {
                payment_id: this.payment.id,
                appointment_id: this.appointment.id,
                transaction_date_time: this.payment.created_at,

            };
            this.loader(true);
            const response = await this.postAppointmentPayments(data);
            this.loader(false);
            if (response.message) {

                this.showToastMessage(response);
            }
            if (response.status !== 201 && this.settingAppointmentOnlineAppointmentWithoutPaymentStatus ?.value === '1') {
                await this.paymentFailedRedirectHandler();
            }
            return response.status === 201;
            // if (response.status === 201) {
            //     this.loader(false);
            //     return true;
            // } else {
            //     this.loader(false);
            //     return false
            // }

        },
        appointmentPaymentEmailNotify() {
            const data = {
                id: this.payment.id,
                params: {
                    notify_customer: 1,
                    notify_internal_user: 1
                }

            };
            this.postPaymentCreationNotifyEmail(data);
        },
        appointmentEmailNotify() {
            const data = {
                appointment: this.appointment.id,
                params: {
                    notify_customer: 1,
                    notify_internal_user: 1
                }

            };
            this.postAppointmentCreationNotifyEmail(data);
        },
        async createCouponUsage() {
            const data = {
                coupon_id: this.preAppointmentResponse.coupon_discount.coupon_id,
                user_id: this.userInformation.id,
                reference: this.appointment.reference,
                discount_amount: this.preAppointmentResponse.coupon_discount.amount,
            }
            this.loader(true);
            const response = await this.postCouponUsage(data);
            this.loader(false);
            if (response.message) {
                this.showToastMessage(response);
            }

        },

        // after pay
        async afterPayServerStatusChecker() {
            this.loader(true);
            const response = await this.tryPing();
            this.loader(false);
            console.log(response);
            if (response.status === 200 && response.data === 'Success') {
                return true;
            }
            if (response.message) {
                this.showToastMessage(response.message);
            }
            if (this.settingAppointmentOnlineAppointmentWithoutPaymentStatus ?.value === '1') {
                await this.paymentFailedRedirectHandler();
            }

            return false;
        },
        async afterPayPaymentConfiguration() {
            this.loader(true);
            if (this.minimumAmount.amount && this.maximumAmount.amount && (this.preAppointmentResponse.grand_total / 100) >= this.minimumAmount.amount && (this.preAppointmentResponse.grand_total / 100) <= this.maximumAmount.amount) {
                return true;
            }
            const response = await this.getConfiguration();
            this.loader(false);

            if (response.status === 200) {
                // this.preAppointmentResponse.grand_total/100
                if ((this.preAppointmentResponse.grand_total / 100) >= this.minimumAmount.amount && (this.preAppointmentResponse.grand_total / 100) <= this.maximumAmount.amount) {
                    return true;
                }
                this.showToastMessage({
                    type: 'error',
                    message: `For afterpay payment minimum amount is ${response.data.minimumAmount.amount} and maximum amount is ${response.data.maximumAmount.amount}`
                });
                return false;
            }
            if (response.message) {
                this.showToastMessage(response.message);
            }
            if (this.settingAppointmentOnlineAppointmentWithoutPaymentStatus ?.value === '1') {
                await this.paymentFailedRedirectHandler();
            }

            return false;
        },
        async afterPayPaymentCheckout() {
            this.loader(true);
            const data = {
                amount: {
                    amount: (this.preAppointmentResponse.grand_total / 100).toString(),
                    currency: "AUD"
                },
                consumer: {
                    givenNames: this.userInformation.firstName,
                    surname: this.userInformation.lastName,
                    email: this.userInformation.email,
                    phoneNumber: this.userInformation.phone,

                },
                billing: {
                    name: this.userInformation.firstName + ' ' + (this.userInformation.lastName),
                    line1: this.addressInformation.street,
                    area1: this.addressInformation.suburb,
                    region: this.addressInformation.state,
                    postcode: this.addressInformation.zipCode,
                    countryCode: "AU"
                },
                shipping: {
                    name: this.userInformation.firstName + ' ' + (this.userInformation.lastName),
                    line1: this.addressInformation.street,
                    area1: this.addressInformation.suburb,
                    region: this.addressInformation.state,
                    postcode: this.addressInformation.zipCode,
                    countryCode: "AU"
                },
                // courier: {
                //     "shippedAt": "2022-11-11",
                //     "tracking": "App-ref-AR",
                //     "priority": "STANDARD"
                // },

                // description:this.issueNote,
                items: [{
                    name: this.selectedService.name,
                    sku: this.selectedService.code,
                    quantity: "1",
                    imageUrl: this.selectedService.image,
                    price: {
                        amount: (this.preAppointmentResponse.service_price / 100).toString(),
                        currency: "AUD"
                    },
                    categories: [
                        [this.selectedService ?.serviceCategory ?.name ?? '']
                    ]
                }],

                // merchant: {
                //     redirectConfirmUrl: 'http://localhost:8081/appointment-payment/success',
                //     redirectCancelUrl: 'http://localhost:8081/book-online'
                // },

                // merchant: {
                //     redirectConfirmUrl: 'https://geekswebsite.test.wsiddiquesolutions.com/appointment-payment/success',
                //     redirectCancelUrl: 'https://geekswebsite.test.wsiddiquesolutions.com/book-online'
                // },

                merchant: {
                    redirectConfirmUrl: 'http://localhost:3000/book-online/success',
                    redirectCancelUrl: 'http://localhost:3000/book-online'
                },

                merchantReference: this.appointment.reference,
                taxAmount: {
                    amount: (this.preAppointmentResponse.gst_charge.applied_status ? this.preAppointmentResponse.gst_charge.amount / 100 : 0).toString(),
                    currency: "AUD"
                },
                shippingAmount: {
                    "amount": "0.00",
                    "currency": "AUD"
                },

            };

            if (this.preAppointmentResponse.coupon_discount.applied_status || this.preAppointmentResponse.online_appointment_discount.applied_status || this.preAppointmentResponse.parking_discount.applied_status || this.preAppointmentResponse.loyalty_discount.applied_status) {
                data.discounts = [];
            }
            if (this.preAppointmentResponse.coupon_discount.applied_status) {
                data.discounts = [...data.discounts];
                data.discounts.push({
                    displayName: `Coupon (${this.preAppointmentResponse.coupon_discount.coupon_code})`,
                    amount: {
                        amount: (this.preAppointmentResponse.coupon_discount.amount / 100).toString(),
                        currency: "AUD"
                    }
                });
            }

            if (this.preAppointmentResponse.online_appointment_discount.applied_status) {
                data.discounts = [...data.discounts];
                data.discounts.push({
                    displayName: `Online Appointment Discount`,
                    amount: {
                        amount: (this.preAppointmentResponse.online_appointment_discount.amount / 100).toString(),
                        currency: "AUD"
                    }
                });
            }

            if (this.preAppointmentResponse.parking_discount.applied_status) {
                data.discounts = [...data.discounts];
                data.discounts.push({
                    displayName: `Appointment Parking Discount`,
                    amount: {
                        amount: (this.preAppointmentResponse.parking_discount.amount / 100).toString(),
                        currency: "AUD"
                    }
                });
            }

            if (this.preAppointmentResponse.loyalty_discount.applied_status) {
                data.discounts = [...data.discounts];
                data.discounts.push({
                    displayName: `Appointment Loyalty Discount`,
                    amount: {
                        amount: (this.preAppointmentResponse.loyalty_discount.amount / 100).toString(),
                        currency: "AUD"
                    }
                });
            }

            const response = await this.createCheckout(data);
            this.loader(false);
            if (response.status === 201) {
                return true;
            }
            if (response.message) {
                this.showToastMessage(response.message);
            }
            if (this.settingAppointmentOnlineAppointmentWithoutPaymentStatus ?.value === '1') {
                await this.paymentFailedRedirectHandler();
            }

            return false;
        },
        editCustomerInfo() {
            // this.step = 5;
            this.bookingSummery = false
            this.editInfo = true
        },
    },

    async mounted() {
        this.loader(true);
        await this.getServiceList({
            status: 1,
            with_relation: ['serviceCategory'],
            show_online_appointment: 1
        });
        await this.getSettingsList({
            type: ['default', 'appointment', 'payment'],
            key: ['default_state', 'default_parking_type', 'appointment_service_platform', 'payment_card_surcharge', 'appointment_online_appointment_terms_and_conditions', 'default_customer_role', 'payment_afterpay_payment_status', 'payment_card_payment_status', 'appointment_online_appointment_without_payment_status'],
        });
        this.loader(false);
    },
    created() {
        this.resetUser();
        this.resetCustomer();
        this.resetPayment();
        this.resetAddress();
        this.resetAppointment();
    },
    head() {
        return {
            title: 'Book Online |',
            meta: [{
                    hid: 'og:title',
                    property: 'og:title',
                    name: 'meta',
                    content: `Book Online | ${process.env.app_name}`
                },
                {
                    hid: 'twitter:title',
                    property: "twitter:title",
                    name: 'meta',
                    content: `Book Online | ${process.env.app_name}`
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    name: 'meta',
                    content: 'https://geekify.au/book-online/'
                },
                {
                    hid: 'twitter:domain',
                    property: 'twitter:domain',
                    name: 'meta',
                    content: 'https://geekify.au/book-online/'
                },
                {
                  hid: 'keywords',
                  name: 'keywords',
                  contents: 'geekify, geeks crs, geeks, geeks australia, geekify au, best pc fixer, computer services sydney, dial a geek sydney, pc moving slow, computer help sydney, computer repairs surry hills, geeksoncall, imac repairs sydney, computer repairs preston, Geek Mobile, Mac Computer Repair, why is my pc so slow, Mac Expert, Fix Slow Computer, jim\'s computer services, iMac Repair Services, mac repair, home pc repair, get rid of viruses, geek squad, how to fix a slow computer, slow pc fix, data storage recovery, computer learning for seniors, fix lap top, computer fix sydney, computer repairs bondi junction, computer repairs maroubra, why is my desktop so slow, my computer loads slow, Home Networking, Geeks Sydney, computer repair hawthorn, IT Infrastructure Services, Mac Recovery, my computer is slow how to fix, IT Service Contract, why is my pc lagging, Jims Computer Services, Geeks CRS, You point it we fix it, geeks in sydney, laptop rescue sydney, Mobile Geeks, computer loading slowly, dial a geek, computer repairs footscray, computer repairs brunswick, Mac Computer Services, Mac Computer Backup, Mac Computer Troubleshooting, why is my computer loading so slowly, fix my pc, hard disk drive recovery, computer repairs sydney, why is computer so slow, geekmobile, Super Geek, computer repairs randwick, fix my slow computer, Mac Repair Services, computer geeks sydney, Mac Installation, Geeks2u, computer nerds near me, computer repair sydney cbd, Computer Geeks, mac repairs sydney, geeks to you sydney, geeks2u sydney, the geeks computer service, laptop fix sydney, how to fix computer speed, computer repairs bondi, geekify, my pc is lagging, computer repairs glen iris, computer very slow how to fix, geeks services, Mac Computer Upgrade, geeks4me, GCRS Sydney, apple mac repair near me, geek pc repair, computer courses for seniors, computer courses for the elderly, computer training for seniors, hard disk restore, laptop service sydney, computer repairs north sydney, clean up slow computer, pc repair sydney, computer repair coogee, computer repairs marrickville, laptop repair sydney cbd, buzzageek, it support northern beaches, mac pro services, computer very slow to start, hire a geek, fix my mac near me, Mac Keyboard Repair, local computer classes for seniors, Fix Slow Windows, Geeks CRS Sydney'
                },
            ],
            link: [{
                hid: 'canonical',
                rel: 'canonical',
                href: 'https://geekify.au/book-online/'
            }],
            script: [{
                    hid: 'afterPayGeneralLibrary',
                    src: 'https://js.afterpay.com/afterpay-1.x.js',
                    defer: true
                },
                {
                    hid: 'afterPayProductionLibrary',
                    src: `${process.env.after_pay_js_production_library}`,
                    defer: true
                },
            ]
        }
    }
}
</script>

<style scoped>
label {
    margin-bottom: 6px;
}

.info-label,
.payment-label {
    margin-bottom: 6px;
    font-size: 15px;
}

.information-form input::placeholder {
    font-size: 15px;
}

input::placeholder,
textarea::placeholder {
    color: #929292;
    font-weight: 300;
}

.sticky-listing-menu {
    position: sticky;
    top: 80px;
    z-index: 99999;
}

.booking-form {
    position: relative;
    background-color: white;
    border-radius: 6px;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
}

.small-device-step-count {
    background-color: #faece6;
    display: inline-block;
    padding: 5px 15px;
    border-radius: 30px;
}

.booking-form-radio-btn {
    position: relative;
    width: 100%;
    height: 100%;
    float: left;
    box-sizing: border-box;
}

.booking-form-radio-btn .booking-form-radio-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 25px;
    transition: .3s ease;
    color: #949494;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
}

.booking-form-radio-btn .booking-form-radio-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}

.booking-form-radio-input[type=radio]:checked~.booking-form-radio-content {
    background-color: #ffeae1;
    color: var(--brandColor);
    border-radius: 5px;
    border: 1px solid var(--brandColor);
}

.checkbox-icon {
    font-size: 32px;
}

.btn-disabled {
    background-color: gray;
    color: white;
    border: 2px solid gray;
}

.parking-checkbox-width {
    min-width: 195px;
}

.time-slot-checkbox-width {
    min-width: 120px;
}

.personal-Details {
    border-left: 1px solid var(--secondaryColor);
}

.payment-chart-table tr td {
    padding: 18px 10px;
}

.payment-chart-table thead tr th {
    padding: 18px 10px;
}

.custom-default-checkbox input[type="checkbox"] {
    display: none;
    visibility: hidden;
}

.custom-default-checkbox .custom-default-checkbox-label {
    margin: auto;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
}

.custom-default-checkbox .custom-default-checkbox-label span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
}

.custom-default-checkbox .custom-default-checkbox-label span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #9098A9;
    transition: all 0.2s ease;
}

.custom-default-checkbox .custom-default-checkbox-label span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #FFFFFF;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
}

.custom-default-checkbox .custom-default-checkbox-label span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: var(--brandColor);
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
}

.custom-default-checkbox .custom-default-checkbox-label span:last-child {
    padding-left: 8px;
}

.custom-default-checkbox .custom-default-checkbox-label:hover span:first-child {
    border-color: var(--brandColor);
}

.custom-default-checkbox .custom-default-checkbox-input:checked+.custom-default-checkbox-label span:first-child {
    background: var(--brandColor);
    border-color: var(--brandColor);
    animation: wave 0.4s ease;
}

.custom-default-checkbox .custom-default-checkbox-input:checked+.custom-default-checkbox-label span:first-child svg {
    stroke-dashoffset: 0;
}

.custom-default-checkbox .custom-default-checkbox-input:checked+.custom-default-checkbox-label span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
}

@keyframes wave {
    50% {
        transform: scale(0.9);
    }
}

.master-card {
    height: 24px;
}

.visa-card {
    height: 22px;
}

.after-pay-card {
    height: 26px;
}

.card-payment-section,
.booking-terms-bg {
    background-color: #f3faff;
}

/* label */
.payment-option-label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    cursor: pointer;
    position: relative;
}

/* input */
.payment-option-input {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}

/* .design */
.package-radio-design {
    width: 16px;
    height: 16px;
    border: 1px solid hsl(27, 100%, 44%);
    border-radius: 100%;
    margin-right: 16px;
    position: relative;
}

.package-radio-design::before,
.package-radio-design::after {
    content: "";
    display: block;

    width: 14px;
    height: 14px;

    border-radius: inherit;

    position: absolute;
    transform: scale(0);
    transform-origin: center center;
}

.package-radio-design:before {
    background: hsl(27, 100%, 44%);
    opacity: 0;
    transition: 0.3s;
}

.package-radio-design::after {
    background: hsl(27, 100%, 44%);
    opacity: 0.4;
    transition: 0.6s;
}

.payment-option-label {
    color: hsl(0, 0%, 14%);
    font-weight: bold;
}

/* checked state */
.payment-option-input:checked+.package-radio-design::before {
    opacity: 1;
    transform: scale(0.6);
}

/* other states */
.payment-option-input:hover+.package-radio-design,
.payment-option-input:focus+.package-radio-design {
    border: 1px solid hsl(27, 100%, 44%);
}

.payment-option-input:hover+.package-radio-design:before,
.payment-option-input:focus+.package-radio-design:before {
    background: hsl(27, 100%, 44%);
}

.payment-option-input:hover~.payment-option-label {
    color: hsl(27, 100%, 44%);
}

.payment-option-input:focus+.package-radio-design::after,
.payment-option-input:active+.package-radio-design::after {
    opacity: 0.1;
    transform: scale(2.6);
}

.info-icon {
    border: 1px solid #808080b5;
    border-radius: 50%;
    display: inline-block;
    padding: 2px 5px;
    font-size: 9px;
    line-height: 1;
    cursor: pointer;
}

.show-max-value {
    display: none;
}

.info-icon:hover+.show-max-value {
    display: inline-block;
}

.booking-terms-bg {
    margin-top: 100px;
}

.edit-btn img {
    height: 20px;
}

.section-border {
    border-top: 1px solid black;
}

.save-continue-btn {
    background-color: var(--secondaryColor);
    color: white;
}

@media(max-width:1399px) {
    .parking-checkbox-width {
        min-width: 155px;
    }
}

@media(max-width:1299px) {
    .parking-checkbox-width {
        min-width: 125px;
    }
}

@media(max-width:991px) {
    .parking-checkbox-width {
        min-width: 140px;
    }
}

@media(max-width:767px) {
    .parking-checkbox-width {
        min-width: 180px;
    }

    .booking-terms-bg {
        margin-top: 50px;
    }
}

@media(max-width:575px) {
    .half-width-td {
        width: 40%;
    }
}

@media(max-width:474px) {
    .parking-checkbox-width {
        min-width: 130px;
    }
}

@media(max-width:423px) {
    .parking-checkbox-width {
        min-width: 115px;
    }
}
</style>
