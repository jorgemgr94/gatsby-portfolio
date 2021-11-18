import React from "react";
import { socialNetworks, about } from "../../database";

function Header() {
	return (
		<>
			<header>
				<section id="leftSection">
					<div className="container-fluid">
						<img
							alt="avatar"
							className="avatar"
							src={require("../../assets/img/me.jpg")}
						/>
						<br />
						<span className="primary-text">Jorge Marcial Garcia Rizo</span>
						<br />
						<span>Software Enginner</span>
						<br />
						<span>(UANL, CP: 11711750)</span>
						<br />
						<br />
						<section style={{ marginBottom: 8 }}>
							<a
								className="email"
								target="_blank"
								rel="noopener noreferrer"
								href="http://jorgemgr.com/"
							>
								www.jorgemgr.com
							</a>
							<br />
							<a className="email" href="mailto:jorgemgr94@gmail.com">
								jorgemgr94@gmail.com
							</a>
						</section>
					</div>
				</section>
				<section id="rightSection">
					<div className="container-fluid">
						<span className="bold">About Me</span>
						<p>{about}</p>
						<div style={{ display: "flex", justifyContent: "flex-start" }}>
							{socialNetworks.map((social) => {
								return (
									<a
										className="mr-4"
										rel="noopener noreferrer"
										href={social.url}
										target="_blank"
										key={social.id}
									>
										<div style={{ display: "inline-block" }}>
											<img
												alt={social.name}
												style={{ width: 30 }}
												src={social.img}
											/>
										</div>
									</a>
								);
							})}
						</div>
					</div>
				</section>
			</header>
		</>
	);
}

export default Header;
