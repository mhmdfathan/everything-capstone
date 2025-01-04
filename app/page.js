// pages/index.js
import React from 'react';

export default function Home() {
    const links = [
        {
            title: 'December Backlog',
            url: 'https://app.clickup.com/9018728086/v/li/901804594450',
        },
        {
            title: 'Github Repo',
            url: 'https://github.com/gelaws-hub/mjtek-site',
        },
        {
            title: 'One Drive Dokumen Capstone',
            url: 'https://undipmail-my.sharepoint.com/:f:/g/personal/ibnufadhil12_students_undip_ac_id/EvKtMN1qWT1NhLduSBRIhucB_3M0ZVzFs5IQ8tph4-Rtpg?e=8qutWY',
        },
        {
            title: 'C400',
            url: 'https://undipmail-my.sharepoint.com/:w:/r/personal/ibnufadhil12_students_undip_ac_id/_layouts/15/Doc.aspx?sourcedoc=%7BE097667C-9076-4ADC-825B-E6FA404392F7%7D&file=C400.S1T24K04.Rev00.docx&action=default&mobileredirect=true'
        }
    ];

    return (
        <div style={styles.appContainer}>
            <h1 style={styles.header}>Everything Capstone</h1>
            <div style={styles.container}>
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        {link.title}
                    </a>
                ))}
            </div>
        </div>
    );
}

const styles = {
    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        marginBottom: '30px',
        fontSize: '48px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
    },
    link: {
        textDecoration: 'none',
        padding: '20px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        borderRadius: '5px',
        fontSize: '32px',
        textAlign: 'center',
        width: '400px',
    },
};
