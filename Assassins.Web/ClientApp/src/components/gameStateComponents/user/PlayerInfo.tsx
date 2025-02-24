import { QRCodeSVG } from 'qrcode.react';
import PlayerAliveComponent from './PlayerAlive';

const PlayerInfoComponent = (props: { alive: boolean; killCode: string }) => {
	const killUrl = `${window.location.origin}/?killCode=${props.killCode}`;

	return (
		<div className="flex flex-col items-center gap-2">
			<PlayerAliveComponent playerAlive={props.alive} />
			<h4 className="text-white">Twój kod: {props.killCode}</h4>
			<div className="bg-white p-2 rounded-lg">
				<QRCodeSVG value={killUrl} />
			</div>
		</div>
	);
};

export default PlayerInfoComponent;
