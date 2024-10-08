document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const issueDescription = document.getElementById('issue').value;

    // Display the submission message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = "Report submitted successfully: " + issueDescription;
    responseMessage.classList.remove('hidden');
    
    // Clear the textarea
    document.getElementById('issue').value = '';

    function viewReports() {
        alert("Viewing reports...");
    }
    
    function manageInteractions() {
        alert("Managing user interactions...");
    }
    
    function viewStatistics() {
        alert("Viewing statistics...");
    }
    
    function viewPendingActions() {
        alert("Viewing pending actions...");
    }

    function manageUsers() {
        alert("Managing users...");
    }
    
    function viewReports() {
        alert("Viewing reports...");
    }
    
    function manageSettings() {
        alert("Managing platform settings...");
    }
    
    function viewLogs() {
        alert("Viewing activity logs...");
    }
    
    function analyzeFeedback() {
        alert("Analyzing feedback...");
    }
    
    
});
