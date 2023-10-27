document.getElementById('downloadResume').addEventListener('click', function() {
    var a = document.createElement('a');
    a.href = 'resume.pdf'; 
    a.download = 'Your_Name_Resume.pdf'; name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
