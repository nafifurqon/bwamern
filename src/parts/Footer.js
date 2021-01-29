import React from 'react'
import Button from 'elements/Button'
import IconText from 'parts/IconText'

export default function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <IconText />
                    <p className="brand-tagline">
                        We kaboom beauty holiday instantly and memorable.
                    </p>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-dlush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">
                                    Start Booking a Room
                                </Button>
                            </li><li className="list-group-item">
                                <Button type="link" href="/use-payments">
                                    Use Payments
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                    <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-dlush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers">
                                    Careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">
                                    Privacy
                                </Button>
                            </li><li className="list-group-item">
                                <Button type="link" href="/terms">
                                    Term & Conditions
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4">
                    <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-dlush">
                            <li className="list-group-item">
                                <Button type="link" href="mailto:support@staycation.id" isExternal>
                                    support@staycation.id
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="tel:+622122081996" isExternal>
                                    021 - 2208 - 1996
                                </Button>
                            </li><li className="list-group-item">
                                <span>Staycation, Kemang, Jakarta</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
