$(function() {

    // Form validation via plugin
    var submitMessage     = $('#submit-message'),
        messageContainer  = submitMessage.find('span'),
        loading           = $('#loading');

    function showMessage(message, classAttr) {
        messageContainer.text(message)
        messageContainer.attr('class', classAttr);
    }


    $('#contact-form').validate({

        // Override to submit the form via ajax
        submitHandler: function(form) {
            var options = {
                beforeSubmit: function() {
                    loading.show();
                },
                success: function() {
                    showMessage('Dank u wel! Uw e-mail is verstuurd. Wij zullen zo spoedig mogelijk contact met u opnemen.', 'success');
                    form.reset();
                    loading.hide();
                },
                error: function() {
                    showMessage('Er was een probleem met het versturen van uw e-mail. Weet u zeker dat u alle velden heeft ingevuld?', 'failure');
                    loading.hide();
                }
            };
            $(form).ajaxSubmit(options);
        },
        invalidHandler: function() {
            showMessage('Er was een probleem met het versturen van uw e-mail. Weet u zeker dat u alle velden heeft ingevuld?', 'failure');
        }
    });
});
