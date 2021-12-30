import {
	FaCode,
	FaInstagram,
	FaMediumM,
	FaStackOverflow,
	FaTwitter
} from "react-icons/fa";
import React from "react";

import Alink from "../../templates/Alink";
import SectionTemplate from "../../templates/SectionTemplate";

interface ISocialNetworkLinkProps {
	icon: React.ReactNode;
	url: string;
	name: string;
}

function SocialNetworkLink({ icon, url, name }: ISocialNetworkLinkProps) {
	return (
		<span className="m-2">
			{icon}
			{` `}
			<Alink url={url}>{name}</Alink>
		</span>
	);
}

function Social() {
	return (
		<SectionTemplate id="social" flexDirection="flex-col">
			<div className="text-yellow-500 text-4xl uppercase font-bold mb-4 w-full">
				Social Media
			</div>
			<section className="flex w-full justify-evenly flex-wrap">
				<SocialNetworkLink
					icon={<FaTwitter className="inline-block" />}
					url="https://twitter.com/jorgemgr94"
					name="Twitter"
				/>
				<SocialNetworkLink
					icon={<FaInstagram className="inline-block" />}
					url="https://www.instagram.com/jorgemgr94/"
					name="Instagram"
				/>
				<SocialNetworkLink
					icon={<FaStackOverflow className="inline-block" />}
					url="https://stackoverflow.com/users/5377188/jorge-garcia"
					name="Stack Overflow"
				/>
				<SocialNetworkLink
					icon={<FaMediumM className="inline-block" />}
					url="https://medium.com/@jorgemgr94"
					name="Medium"
				/>
				<SocialNetworkLink
					icon={<FaCode className="inline-block" />}
					url="https://dev.to/jorgemgr94"
					name="Dev.to"
				/>
				<SocialNetworkLink
					icon={<FaCode className="inline-block" />}
					url="https://app.codesignal.com/profile/jorgemgr94"
					name="Codesignal"
				/>
			</section>
		</SectionTemplate>
	);
}

export default Social;
