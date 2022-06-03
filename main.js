(function () {
  if ($(".js-modal-video").length) { //クラス名js-modal-videoがあれば以下を実行
    $(".js-modal-video").modalVideo({
      channel: "youtube",
      youtube: {
        rel: 0, 
        autoplay: 0, 
      },
    });
  }

  $('.btn-cat').on('click', (e) => {
    const id = e.currentTarget.id;
    const result = id.match(/^btn-(.+)$/);
    const targetSection = result[1];

    $('#graphic').fadeOut();
    $('#web').fadeOut();
    $('#other').fadeOut();
    $('#' + targetSection).fadeIn();
  });
})();

$('#wave').wavify({
  height:60,
  bones: 3,
  amplitude: 40,
  color: '#99DAD9',
  speed: .25
});
