import React from "react";

import IconRounded from "../../templates/IconRounded";

import { SocialNetworksData } from "../../data";

function SocialNetworks() {
	return (
		<>
			<section className="mb-4">
				{SocialNetworksData.map((socialNetwork, key) => (
					<a
						key={key}
						href={socialNetwork.url}
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-pointer"
					>
						<IconRounded icon={<socialNetwork.icon />} />
					</a>
				))}
			</section>
		</>
	);
}

export default SocialNetworks;
