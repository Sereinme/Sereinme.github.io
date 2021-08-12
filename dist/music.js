const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    mini: true, //迷你模式
    fixed: false,
    autoplay: true, //自动播放
    theme: '#000000', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'list', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    lrcType: 3, //歌词传递方式
    audio: [ //音频信息,包含以下
        {
            name: 'Crush', //音频名称
            artist: 'Polyphia', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=407000148.mp3', //音频外链
            cover: 'http://p2.music.126.net/0dtev8crrussCiZ2qou4Bw==/109951163302888971.jpg', //音频封面
            lrc: '', //音频歌词，配合上面的lrcType使用
            theme: '#000000' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: '40oz', //音频名称
            artist: 'Polyphia', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=559735797.mp3', //音频外链
            cover: 'http://p2.music.126.net/jNChO-ndetFG2dIDx3Q4hQ==/109951164937591463.jpg', //音频封面
            lrc: '', //音频歌词，配合上面的lrcType使用
            theme: '#000000' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: 'James Franco', //音频名称
            artist: 'Polyphia', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=28983126.mp3', //音频外链
            cover: 'http://p1.music.126.net/rQBpxMuN-Fp-zGfSHSWnFQ==/109951165097812914.jpg', //音频封面
            lrc: '', //音频歌词，配合上面的lrcType使用
            theme: '#000000' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: 'G.O.A.T.', //音频名称
            artist: 'Polyphia', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=570010342.mp3', //音频外链
            cover: 'http://p2.music.126.net/DePoY1cYbvs9vNpLDq-Ytg==/109951163451528316.jpg', //音频封面
            lrc: '', //音频歌词，配合上面的lrcType使用
            theme: '#000000' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
    ]
});