export class Util {
    getAgo(date: any) {
        let t1 = new Date(date);
        let t2 = new Date();
        let m = (t2.getTime() - t1.getTime())/1000*60;
        let ago = '';
        if (m < 60) {
            ago = m + ' mins';
        } else {
            m = m / 60;
            if (m < 24) {
                ago = m + ' hrs';
            } else {
                m = m / 24;
                ago = m + ' days';
            }
        }
    }
}
