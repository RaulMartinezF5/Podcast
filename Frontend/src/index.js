const API_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200) {
        // 0 = UNSET,no se ha llamado al metedo OPEN
        // 1 = OPENED,se ha llamado al metodo open
        // 2 = HEADERS_REACTIVED,se esta llamando al metodo send()
        // 3 = LOADING,esta cargando esta recibiendo la respuesta
    }
}
