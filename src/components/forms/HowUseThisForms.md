- Form Components Documentation

Complete guide for using all form components with react-hook-form.

-Setup

```jsx
import { useForm } from 'react-hook-form';
import { Form, FormInput, FormCheckbox, FormRadio, FormTextarea, FormSelect, FormMultiSelect } from './forms';

function MyForm() {

    // here u must enter the feild in entire form 
  const form = useForm({
    defaultValues: {
      email: '',
      agree: false,
      // ... other fields
    }
  });

  return (
  );
}
```
// Get all form values
const allValues = form.watch();

// Get specific field value
const emailValue = form.watch('email');

// Get form state
const { errors, isDirty, isValid, isSubmitting } = form.formState;

// Reset form
form.reset();

// Set value
form.setValue('email', 'new@email.com');

---

## FormInput - Text Input Field

```jsx
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

<FormInput

  control={form.control}              // Required: Form control from useForm()
  name="email"                        // Required: Field name (must match form state key)
  
  label="Email Address"               // Optional: Label text displayed above input
  placeholder="your.email@example.com" // Optional: Placeholder text inside input
  description="We'll never share your email" // Optional: Helper text below input
  

  type="email"                        // Optional: Input type (text, email, password, number, url, tel, etc.)
  icon={<EmailIcon />}               // Optional: Icon component displayed on the left side
  iconEnd={<LockIcon />}             // Optional: Icon component displayed on the right side
  text="https://"                     // Optional: Text prefix displayed before input (e.g., "https://")
  

  rules={{                            // Optional: Validation rules from react-hook-form
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address'
    },
    minLength: {
      value: 5,
      message: 'Email must be at least 5 characters'
    }
  }}
  defaultValue=""                     // Optional: Default value for the field
  

  className="custom-input"            // Optional: CSS class for input wrapper
  labelClassName="custom-label"      // Optional: CSS class for label element
  descriptionClassName="custom-desc" // Optional: CSS class for description element
  messageClassName="custom-error"    // Optional: CSS class for error message element
  itemClassName="custom-item"         // Optional: CSS class for FormItem wrapper
  

  labelStyle={{                       // Optional: Inline styles for label
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#235D6C'
  }}
  descriptionStyle={{                 // Optional: Inline styles for description
    fontSize: '12px',
    color: '#98a6ad',
    fontStyle: 'italic'
  }}
  messageStyle={{                     // Optional: Inline styles for error message
    fontSize: '14px',
    fontWeight: '600',
    color: '#f1556c'
  }}
/>
```



## FormCheckbox - Checkbox Field



```jsx
<FormCheckbox
  control={form.control}              // Required: Form control from useForm()
  name="agreeToTerms"                 // Required: Field name (must match form state key)
  
  label="I agree to the terms and conditions" // Optional: Label text next to checkbox
  description="By checking this, you agree to our terms" // Optional: Helper text below checkbox
  
  rules={{                            // Optional: Validation rules
    required: 'You must agree to continue'
  }}
  defaultValue={false}                // Optional: Default checked state (default: false)
  
  className="custom-checkbox"         // Optional: CSS class for checkbox wrapper
  descriptionClassName="custom-desc"  // Optional: CSS class for description element
  messageClassName="custom-error"     // Optional: CSS class for error message element
  itemClassName="custom-item"          // Optional: CSS class for FormItem wrapper
  
  descriptionStyle={{                 // Optional: Inline styles for description
    fontSize: '12px',
    color: '#98a6ad'
  }}
  messageStyle={{                     // Optional: Inline styles for error message
    fontSize: '14px',
    fontWeight: '600',
    color: '#f1556c'
  }}
/>
```


## FormRadio - Radio Button Group



```jsx
<FormRadio

  control={form.control}              // Required: Form control from useForm()
  name="accountType"                  // Required: Field name (must match form state key)
  options={[                           // Required: Array of option objects
    { value: 'personal', label: 'Personal' },
    { value: 'business', label: 'Business' },
    { value: 'enterprise', label: 'Enterprise' }
  ]}
  
  label="Account Type"                // Optional: Label text above radio group
  description="Choose your account type" // Optional: Helper text below radio group
  
  direction="vertical"                // Optional: Layout direction - 'vertical' (default) or 'horizontal'
  
  rules={{                            // Optional: Validation rules
    required: 'Please select an account type'
  }}
  defaultValue=""                     // Optional: Default selected value
  
  className="custom-radio-group"      // Optional: CSS class for radio group wrapper
  labelClassName="custom-radio-label" // Optional: CSS class for label element
  descriptionClassName="custom-desc"  // Optional: CSS class for description element
  messageClassName="custom-error"     // Optional: CSS class for error message element
  itemClassName="custom-item"          // Optional: CSS class for FormItem wrapper
  
  labelStyle={{                       // Optional: Inline styles for label
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#235D6C'
  }}
  descriptionStyle={{                 // Optional: Inline styles for description
    fontSize: '12px',
    color: '#98a6ad'
  }}
  messageStyle={{                     // Optional: Inline styles for error message
    fontSize: '14px',
    fontWeight: '600',
    color: '#f1556c'
  }}
/>
```



## FormTextarea - Textarea Field



```jsx
<FormTextarea
  control={form.control}              // Required: Form control from useForm()
  name="bio"                          // Required: Field name (must match form state key)
  
  label="Bio"                         // Optional: Label text above textarea
  placeholder="Tell us about yourself..." // Optional: Placeholder text inside textarea
  description="Maximum 500 characters" // Optional: Helper text below textarea
  
  rows={4}                            // Optional: Number of visible rows (default: 3)
  
  rules={{                            // Optional: Validation rules
    required: 'Bio is required',
    maxLength: {
      value: 500,
      message: 'Maximum 500 characters'
    },
    minLength: {
      value: 10,
      message: 'Minimum 10 characters'
    }
  }}
  defaultValue=""                     // Optional: Default value for the textarea
  
  className="custom-textarea"         // Optional: CSS class for textarea element
  labelClassName="custom-label"       // Optional: CSS class for label element
  descriptionClassName="custom-desc"  // Optional: CSS class for description element
  messageClassName="custom-error"      // Optional: CSS class for error message element
  itemClassName="custom-item"          // Optional: CSS class for FormItem wrapper
  
  labelStyle={{                       // Optional: Inline styles for label
    fontSize: '18px',
    fontWeight: 'bold'
  }}
  descriptionStyle={{                 // Optional: Inline styles for description
    fontSize: '12px',
    color: '#98a6ad'
  }}
  messageStyle={{                     // Optional: Inline styles for error message
    fontSize: '14px',
    fontWeight: '600',
    color: '#f1556c'
  }}
/>
```

## FormSelect - Dropdown Select Field


```jsx
<FormSelect
  
  control={form.control}              // Required: Form control from useForm()
  name="country"                     // Required: Field name (must match form state key)
  options={[                          // Required: Array of option objects
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' }
  ]}
  

  label="Country"                     // Optional: Label text above select
  placeholder="Select your country"   // Optional: Placeholder option text (disabled, shown when no value selected)
  description="Choose your country of residence" // Optional: Helper text below select
  

  rules={{                            // Optional: Validation rules
    required: 'Please select a country'
  }}
  defaultValue=""                     // Optional: Default selected value
  

  className="custom-select"           // Optional: CSS class for select element
  labelClassName="custom-label"       // Optional: CSS class for label element
  descriptionClassName="custom-desc"  // Optional: CSS class for description element
  messageClassName="custom-error"     // Optional: CSS class for error message element
  itemClassName="custom-item"          // Optional: CSS class for FormItem wrapper
  

  labelStyle={{                       // Optional: Inline styles for label
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#235D6C'
  }}
  descriptionStyle={{                 // Optional: Inline styles for description
    fontSize: '12px',
    color: '#98a6ad'
  }}
  messageStyle={{                     // Optional: Inline styles for error message
    fontSize: '14px',
    fontWeight: '600',
    color: '#f1556c'
  }}
/>
```

## ✅ Validation Rules

All form components support `rules` prop for validation. Common rules:

```jsx
rules={{
  // Required field
  required: 'This field is required',
  
  // Minimum length
  minLength: {
    value: 3,
    message: 'Must be at least 3 characters'
  },
  
  // Maximum length
  maxLength: {
    value: 100,
    message: 'Maximum 100 characters'
  },
  
  // Pattern (regex)
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address'
  },
  
  // Minimum value (for numbers)
  min: {
    value: 0,
    message: 'Must be positive'
  },
  
  // Maximum value (for numbers)
  max: {
    value: 100,
    message: 'Maximum 100'
  },
  
  // Custom validation function
  validate: (value) => {
    if (value === 'test') {
      return 'Cannot use "test" as value';
    }
    return true;
  }
}}
```
---

---FormMultiSelect - Multi-Select Dropdown



```jsx
<FormMultiSelect
  control={form.control}
  name="skills"
  label="Skills"
  placeholder="Select your skills..."
  description="Select multiple skills that apply to you"
  options={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'python', label: 'Python' },
  ]}
  valueKey="value"
  labelKey="label"
  includeSelectAll={true}
  includeFilter={true}
  dropdownHeight={200}
  rules={{ required: 'Please select at least one skill' }}
/>
```



**Access Selected Values:**
```jsx
// Get selected values (full objects)
const selectedSkills = form.watch('skills');
console.log(selectedSkills); 
// Output: [{ value: 'react', label: 'React' }, { value: 'nodejs', label: 'Node.js' }]

// Get just the values
const skillValues = selectedSkills?.map(s => s.value);
console.log(skillValues); 
// Output: ['react', 'nodejs']

// Get just the labels
const skillLabels = selectedSkills?.map(s => s.label);
console.log(skillLabels); 
// Output: ['React', 'Node.js']
```

---

## Complete Example
ther is file call example.jsx u can see it to know who use the forms







