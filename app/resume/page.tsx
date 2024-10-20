const ResumePage = () => {
  // Redirect to the PDF
  if (typeof window !== 'undefined') {
    window.location.href = '/Shubham_Sable_Resume.pdf';
  }

  return null;
};

export default ResumePage;
