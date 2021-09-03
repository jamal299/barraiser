export default [
  {
    texts: {
      header: 'Please provide pincode',
    },
    inputs: [
      {
        label: 'Pincode',
        type: 'text',
        name: 'pincode',
        validation: {
          required: true,
          minLength: 6,
          maxLength: 7,
        },
        error: 'Invalid Pincode',
      },
    ],
  },
  {
    texts: {
      header: 'Please provide address',
    },
    inputs: [
      {
        label: 'Address line 1',
        type: 'text',
        name: 'address-line-1',
        validation: {
          required: true,
        },
        error: 'Please provide Address',
      },
      {
        label: 'Address line 2',
        type: 'text',
        name: 'address-line-2',
      },
      {
        label: 'Locality',
        type: 'text',
        name: 'locality',
        validation: {
          required: true,
        },
        error: 'Please provide Locality',
      },
    ],
  },
  {
    texts: {
      header: 'Please provide landmark',
    },
    inputs: [
      {
        label: 'Landmark',
        type: 'textarea',
        name: 'landmark',
      },
    ],
  },
];
