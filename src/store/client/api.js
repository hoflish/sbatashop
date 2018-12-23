import SbataShopClient from '@sbatashop/client';
import clientSettings from './settings';

const api = new SbataShopClient({
	ajaxBaseUrl: clientSettings.ajaxBaseUrl || '/ajax'
});

export default api;
