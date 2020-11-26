$(document).ready(function () {
      setTimeout(function () {

            $('a[href]#no-link').each(function () {
                var href = this.href;

                $(this).removeAttr('href').css('cursor', 'pointer').click(function () {
                    if (href.toLowerCase().indexOf("#") >= 0) {

                    } else {
                        window.open(href, '_blank');
                    }
                });
            });

      }, 500);
});
