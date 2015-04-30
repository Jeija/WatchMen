module.exports =
[
	{
		name:'API Server 1 (Celestia)',
		host: '192.168.2.30',
		port: 1230,
		protocol: 'http',
		ping_service_name: 'http',
		timeout: 5000,
		ping_interval: 10,
		failed_ping_interval: 3,
		enabled: true,
		warning_if_takes_more_than: 1500,
		services : [{
			name: 'ping',
			method: 'get',
			url : '/ping',
			expected: {statuscode: 204}
		}]
	},

	{
		name:'API Server 2 (Luna)',
		host: '192.168.2.31',
		port: 1230,
		protocol: 'http',
		ping_service_name: 'http',
		timeout: 5000,
		ping_interval: 10,
		failed_ping_interval: 3,
		enabled: true,
		warning_if_takes_more_than: 1500,
		services : [{
			name: 'ping',
			method: 'get',
			url : '/ping',
			expected: {statuscode: 204}
		}]
	},

	{
		name:'Webcam Server',
		host: '192.168.2.60',
		port: 1233,
		protocol: 'http',
		ping_service_name: 'http',
		timeout: 5000,
		ping_interval: 10,
		failed_ping_interval: 3,
		enabled: true,
		warning_if_takes_more_than: 1500,
		services : [{
			name: 'ping',
			method: 'get',
			url : '/',
			expected: {statuscode: 200}
		}]
	},

	{
		name:'Gateway Frankfurt',
		host: 'frankfurt.centralbank.eu',
		port: 22,
		protocol: 'tcp',
		ping_service_name: 'tcp',
		timeout: 10000,
		ping_interval: 15,
		failed_ping_interval: 3,
		enabled: true,
		warning_if_takes_more_than: 2500,
		services : [{
			name: 'SSH'
		}]
	},

	{
		name:'Gateway Amsterdam',
		host: 'amsterdam.centralbank.eu',
		port: 22,
		protocol: 'tcp',
		ping_service_name: 'tcp',
		timeout: 10000,
		ping_interval: 15,
		failed_ping_interval: 3,
		enabled: true,
		warning_if_takes_more_than: 2500,
		services : [{
			name: 'SSH'
		}]
	},

	{
		name:'Gateway Frankfurt Tunnel (Celestia)',
		host: 'frankfurt.centralbank.eu',
		port: 1230,
		protocol: 'http',
		ping_service_name: 'http',
		timeout: 10000,
		ping_interval: 15,
		failed_ping_interval: 3,
		enabled: true,
		warning_if_takes_more_than: 2500,
		services : [{
			name: 'ping',
			method: 'get',
			url : '/ping',
			expected: {statuscode: 204}
		}]
	},

	{
		name:'Gateway Amsterdam Tunnel (Luna)',
		host: 'amsterdam.centralbank.eu',
		port: 1230,
		protocol: 'http',
		ping_service_name: 'http',
		timeout: 10000,
		ping_interval: 15,
		failed_ping_interval: 3,
		enabled: true,
		warning_if_takes_more_than: 2500,
		services : [{
			name: 'ping',
			method: 'get',
			url : '/ping',
			expected: {statuscode: 204}
		}]
	},

	{
		name:'Network Management Server 1 (Flim)',
		host: '192.168.2.10',
		port: 22,
		protocol: 'tcp',
		ping_service_name: 'tcp',
		timeout: 5000,
		ping_interval: 10,
		failed_ping_interval: 3,
		enabled: true,
		warning_if_takes_more_than: 1500,
		services : [{
			name : "SSH"
		}]
	},

	{
		name:'Network Management Server 2 (Flam)',
		host: '192.168.2.11',
		port: 22,
		protocol: 'tcp',
		ping_service_name: 'tcp',
		timeout: 5000,
		ping_interval: 10,
		failed_ping_interval: 3,
		enabled: true,
		warning_if_takes_more_than: 1500,
		services : [{
			name : "SSH"
		}]
	},

	{
		name:'Database Master',
		host: '10.10.5.10',
		port: 27017,
		protocol: 'tcp',
		ping_service_name: 'tcp',
		timeout: 5000,
		ping_interval: 10,
		failed_ping_interval: 3,
		enabled: true,
		warning_if_takes_more_than: 1500,
		services : [{
			name : "MongoDB"
		}]
	},

	{
		name:'Database Slave',
		host: '10.10.5.11',
		port: 27017,
		protocol: 'tcp',
		ping_service_name: 'tcp',
		timeout: 5000,
		ping_interval: 10,
		failed_ping_interval: 3,
		enabled: true,
		warning_if_takes_more_than: 1500,
		services : [{
			name : "MongoDB"
		}]
	}
];
