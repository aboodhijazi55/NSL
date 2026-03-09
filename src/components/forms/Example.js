// import React from 'react';
// import { useForm } from 'react-hook-form';
// import {
//   Form,
//   FormInput,
//   FormCheckbox,
//   FormRadio,
//   FormTextarea,
//   FormSelect,
//   FormDatePicker,
//   FormMultiSelect,
//   FormMultiEmailSelect,
//   FormPhone,
//   FormFileUpload,
// } from '@/forms';
// import { String } from '@/hooks/useTranslation';

// function ExampleForm() {
//   const form = useForm({
//     defaultValues: {
//       username: '',
//       email: '',
//       password: '',
//       bio: '',
//       country: '',
//       accountType: '',
//       skills: [],
//       agreeToTerms: false,
//       newsletter: false,
//       birthDate: '',
//       startDate: '',
//       mobile: '',
//       phone: '',
//       document: null,
//       documents: [],
//       avatar: null,
//     },
//   });

//   const onSubmit = (data) => {
//     console.log('Form submitted:', data);
//     alert(JSON.stringify(data, null, 2));
//   };

//   // Example icons
//   const UserIcon = (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//       <circle cx="12" cy="7" r="4" />
//     </svg>
//   );

//   const EmailIcon = (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//       <polyline points="22,6 12,13 2,6" />
//     </svg>
//   );

//   const CalendarIcon = (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//       <line x1="16" y1="2" x2="16" y2="6" />
//       <line x1="8" y1="2" x2="8" y2="6" />
//       <line x1="3" y1="10" x2="21" y2="10" />
//     </svg>
//   );

//   return (
//     <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '1rem' }}>
//       <h1 style={{ marginBottom: '2rem' }}>all forms</h1>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

//           {/* Simple Input - Just one line! */}
//           <FormInput
//             control={form.control}
//             name="username"
//             label="Username"
//             placeholder="Enter your username"
//             icon={UserIcon}
//             description="Your public display name (minimum 3 characters)"
//             rules={{
//               required: 'Username is required',
//               minLength: { value: 3, message: 'Username must be at least 3 characters' },
//             }}
//           />

//           {/* Email with Icon */}
//           <FormInput
//             control={form.control}
//             name="email"
//             label="Email"
//             type="date"
//             placeholder="your.email@example.com"
//             icon={EmailIcon}
//             description="We'll never share your email"
//             rules={{
//               required: 'Email is required',
//               pattern: {
//                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                 message: 'Invalid email address',
//               },
//             }}
//           />

//           {/* Password with Auto Toggle */}
//           <FormInput
//             control={form.control}
//             name="password"
//             label="Password"
//             type="password"
//             placeholder="Enter your password"
//             description="Must be at least 8 characters"
//             rules={{
//               required: 'Password is required',
//               minLength: { value: 8, message: 'Password must be at least 8 characters' },
//             }}
//           />

//           {/* Input with Text Prefix */}
//           <FormInput
//             control={form.control}
//             name="website"
//             label="Website"
//             type="url"
//             text="https://"
//             placeholder="example.com"
//             description="Your website or portfolio"
//           />

//           {/* Phone Input - Mobile */}
//           <FormPhone
//             control={form.control}
//             name="mobile"
//             label="Mobile"
//             placeholder="Enter mobile number"
//             description="Your mobile phone number with country code"
//             rules={{
//               required: 'Mobile number is required',
//             }}
//           />

//           {/* Phone Input - Phone (Optional) */}
//           <FormPhone
//             control={form.control}
//             name="phone"
//             label="Phone"
//             placeholder="Enter phone number"
//             description="Your landline phone number (optional)"
//           />

//           {/* Textarea */}
//           <FormTextarea
//             control={form.control}
//             name="bio"
//             label="Bio"
//             placeholder="Tell us about yourself..."
//             rows={4}
//             description="Brief description about you"
//           />

//           {/* Date Picker */}
//           <FormDatePicker
//             control={form.control}
//             name="birthDate"
//             label="Birth Date"
//             icon={CalendarIcon}
//             // description="Select your date of birth"
//             rules={{ required: 'Birth date is required' }}
//           />

//           {/* Date Picker with Min/Max */}
//           <FormDatePicker
//             control={form.control}
//             name="startDate"
//             label="Start Date"
//             // description="Select your preferred start date"
//             min={new Date().toISOString().split('T')[0]}
//           />

//           {/* Select Dropdown */}
//           <FormSelect
//             control={form.control}
//             name="country"
//             label="Country"
//             placeholder={String('Delete this form')}
//             description="Choose your country of residence"
//             options={[
//               { value: 'us', label: 'United States' },
//               { value: 'uk', label: 'United Kingdom' },
//               { value: 'ca', label: 'Canada' },
//               { value: 'au', label: 'Australia' },
//             ]}
//             rules={{ required: 'Please select a country' }}
//           />

//           {/* Multi Select */}
//           <FormMultiSelect
//             control={form.control}
//             name="skills"
//             label="Skills"
//             placeholder="Select your skills..."
//             description="Select multiple skills that apply to you"
//             options={[
//               { value: 'javascript', label: 'JavaScript' },
//               { value: 'react', label: 'React' },
//               { value: 'nodejs', label: 'Node.js' },
//               { value: 'python', label: 'Python' },
//               { value: 'css', label: 'CSS' },
//               { value: 'html', label: 'HTML' },
//               { value: 'typescript', label: 'TypeScript' },
//               { value: 'sql', label: 'SQL' },
//             ]}
//             rules={{ required: 'Please select at least one skill' }}
//           />

//           {/* Radio Buttons */}
//           <FormRadio
//             control={form.control}
//             name="accountType"
//             label="Account Type"
//             labelClassName="custom-radio-label"
//             description="Choose your account type"
//             options={[
//               { value: 'personal', label: 'Personal' },
//               { value: 'business', label: 'Business' },
//               { value: 'enterprise', label: 'Enterprise' },
//             ]}
//             rules={{ required: 'Please select an account type' }}
//           />

//           {/* Radio Horizontal */}
//           <FormRadio
//             control={form.control}
//             name="gender"
//             label="Gender"
//             direction="horizontal"
//             options={[
//               { value: 'male', label: 'Male' },
//               { value: 'female', label: 'Female' },
//               { value: 'other', label: 'Other' },
//             ]}
//           />

//           {/* Checkbox Required */}
//           <FormCheckbox
//             control={form.control}
//             name="agreeToTerms"
//             label="I agree to the terms and conditions"
//             rules={{ required: 'You must agree to continue' }}
//           />

//           {/* Checkbox Optional */}
//           <FormCheckbox
//             control={form.control}
//             name="newsletter"
//             label="Subscribe to newsletter"
//             description="Get updates about new features"
//           />
//           <FormMultiEmailSelect
//             control={form.control}
//             name="emails"
//             label="Email Addresses"
//             rules={{
//               required: 'Please add at least one email address',
//               validate: (value) => value.length > 0 || 'At least one email is required'
//             }}
//           />



//           {/* File Upload - Multiple Documents */}
//           <FormFileUpload
//             control={form.control}
//             name="documents"
//             label="Upload Multiple Documents"
//             uploadText="Upload"
//             description="Upload multiple documents (max 10MB each)"
//             accept=".pdf,.doc,.docx,.jpg,.png"
//             multiple={true}
//             maxSize={10 * 1024 * 1024} // 10MB
//           />



//           {/* Submit Button */}
//           <button type="submit" className="form-button">
//             Submit
//           </button>
//         </form>
//       </Form>

//       <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
//         <h3>Form Values:</h3>
//         <pre style={{ fontSize: '0.75rem' }}>
//           {JSON.stringify(form.watch(), null, 2)}
//         </pre>
//       </div>
//     </div>
//   );
// }

// export default ExampleForm;
