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
		<span className="m-2 text-blue-400 hover:text-blue-300 dark:text-white dark:hover:text-blue-400">
			<Alink url={url}>
				{icon} {name}
			</Alink>
		</span>
	);
}

const socialNetworks = [
	{
		icon: FaTwitter,
		url: `https://twitter.com/jorgemgr94`,
		name: `Twitter`
	},
	{
		icon: FaInstagram,
		url: `https://www.instagram.com/jorgemgr94/`,
		name: `Instagram`
	},
	{
		icon: FaStackOverflow,
		url: `https://stackoverflow.com/users/5377188/jorge-garcia`,
		name: `Stack Overflow`
	},
	{
		icon: FaMediumM,
		url: `https://medium.com/@jorgemgr94`,
		name: `Medium`
	},
	{
		icon: FaCode,
		url: `https://dev.to/jorgemgr94`,
		name: `Dev.to`
	},
	{
		icon: FaCode,
		url: `https://app.codesignal.com/profile/jorgemgr94`,
		name: `Codesignal`
	}
];

function Social() {
	return (
		<SectionTemplate id="social" flexDirection="flex-col">
			<div className="text-4xl uppercase font-bold mb-4 w-full dark:text-yellow-500">
				Social Media
			</div>
			<section className="flex w-full justify-evenly flex-wrap">
				{socialNetworks.map((socialNetwork, key) => (
					<SocialNetworkLink
						key={key}
						icon={<socialNetwork.icon className="inline-block" />}
						url={socialNetwork.url}
						name={socialNetwork.name}
					/>
				))}
			</section>
		</SectionTemplate>
	);
}

export default Social;
