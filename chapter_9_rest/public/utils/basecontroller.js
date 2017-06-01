/**
 * Created by Administrator on 2017/5/26.
 */


module.exports = {
    askConfirmation : function (message, callback) {
    var options = {
        title: 'Are you sure?',
        // Show the warning icon
        type: 'warning',
        text: message,
        // By default the cancel button is not shown
        showCancelButton: true,
        confirmButtonText: 'Yes, do it!',
        // Overwrite the default button color
        confirmButtonColor: '#5cb85c',
        cancelButtonText: 'No'
    };
    // Show the message
    swal(options, function(isConfirm) {
        callback(isConfirm);
    });
},

  notifySuccess : function  (message) {
    new noty({
        text: message,
        layout: 'topRight',
        theme: 'relax',
        type: 'success',
        timeout: 3000 // close automatically
    });
},

  notifyError : function (message) {
    new noty({
        text: message,
        layout: 'topRight',
        theme: 'relax',
        type: 'error',
        timeout: 3000 // close automatically
    });
}
};