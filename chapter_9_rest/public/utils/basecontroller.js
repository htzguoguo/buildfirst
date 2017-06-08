/**
 * Created by Administrator on 2017/5/26.
 */


module.exports = {
    askConfirmation : function (message, isAutoClose, callback) {
    var options = {
        title: "提示：",
        // Show the warning icon
        type: 'warning',
        text: message,
        // By default the cancel button is not shown
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: "取消",
        // Overwrite the default button color
        confirmButtonColor: '#5cb85c',
        closeOnConfirm: isAutoClose,
        closeOnCancel: true
    };
    // Show the message
    swal(options, function(isConfirm) {
        callback(isConfirm);
    });
},

    successMessage : function(message) {
        swal({
            title: "提示：",
            text: message,
            confirmButtonColor: "#66BB6A",
            type: "success"
        });


       /* swal({
            title: "Good job!",
            text: message,
            confirmButtonColor: "#66BB6A",
            type: "warning"
        });*/

       /* var options = {
            title: 'Success',
            type: 'success',
            text: message,
            confirmButtonText: 'Okay'
        };
        swal(options);*/
    },

    errorMessage : function(message) {
        swal({
            title: "提示：",
            text: message,
            confirmButtonColor: "#EF5350",
            type: "warning"
        });
       /* var options = {
            title: 'Error',
            type: 'error',
            text: message,
            confirmButtonText: 'Okay'
        };
        swal(options);*/
    },

  notifySuccess : function  (message) {

      $.jGrowl(message, {
          header: '提示：',
          life: 10000,
          position: 'top-right',
          theme: 'alert-styled-left alert-arrow-left alert-primary'
      });

},

  notifyError : function (message) {
      $.jGrowl(message, {
          header: '提示：',
          life: 10000,
          position: 'top-right',
          theme: 'alert-bordered bg-danger alert-styled-left alert-danger'
      });
}
};