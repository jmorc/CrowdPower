$(function(){
  Dropzone.options.CfDropzone = {
  
    // Configuration prevents dropzone from uploading files 
    // immediately when they're added
    autoProcessQueue: false,
    uploadMultiple: true,
    parallelUploads: 100,
    maxFiles: 100,

    init: function() {
      var myDropzone = this;

      this.element.querySelector("button[type=submit]").addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        myDropzone.processQueue();
      });
    }
  };

    if ( typeof CFspace === 'undefined' ) {
        CFspace = {};
    }

    CFspace.textEdited = false;

    var seeMore = function(){
        $('.see-more').toggleClass('hidden');
    };

    var clearTextEntry = function(event) {
        if ( !this.textEdited ) {
            event.currentTarget.value = '';
            this.textEdited = true;
        }
    };

    var monitorTextEntry = function(event){
        var textLength = event.currentTarget.textLength;
        if ( textLength > 0 && textLength < 140 ) {
            $('#btn-send').prop('disabled', false);
        } else {
            $('#btn-send').prop('disabled', true);
        }
    };

    var useCaseAjax = function(event){
        var targetDiv = event.currentTarget
        var data = targetDiv.getAttribute('data-casename');
        var dataJson = JSON.stringify({ useCase: data });

        $.ajax({
            url: "",
            method: "POST",
            contentType: "application/json; charset=utf-8",
            data: dataJson,
            success: function(){
                alert('ajax success for use case: ' + data)
            },
            error: function(xhr, ajaxOptions, thrownError){
                alert('ajax success');
            }
        });
        
    }

    $('.use-case-outer').on('click', useCaseAjax)
    $('#goal-description').on('click', clearTextEntry);
    $('#goal-description').on('keyup', monitorTextEntry);
    $('.seeButton').on('click', seeMore);
});

