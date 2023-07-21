let ip = 'play.castiamc.com';
new ClipboardJS('#ipCopy', {
    text: () => ip
}).on('success', e => {
    swal(
        'Server IP Copied',
        'See you soon :)'
    )
})

tippy('#ipCopy',{
    content: "Click to Copy IP!",
    placement: 'bottom',
    arrow: true
});
