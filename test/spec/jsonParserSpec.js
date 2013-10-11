describe("The Json return from the hook", function(){
	var returnJSON = {
  "From": "markson@me.com",
  "FromFull": {
    "Email": "markson@me.com",
    "Name": "Markson Zhu"
  },
  "To": "0488857a2c5749b158dd1d92f94417f8@inbound.postmarkapp.com",
  "ToFull": [
    {
      "Email": "0488857a2c5749b158dd1d92f94417f8@inbound.postmarkapp.com",
      "Name": ""
    }
  ],
  "Cc": "",
  "CcFull": [],
  "ReplyTo": "",
  "Subject": "test",
  "MessageID": "db9930c4-afdb-4784-916f-d44d76567627",
  "Date": "Mon, 05 Aug 2013 20:44:15 +1200",
  "MailboxHash": "",
  "TextBody": "test",
  "HtmlBody": "",
  "Tag": "",
  "Headers": [
    {
      "Name": "X-Spam-Checker-Version",
      "Value": "SpamAssassin 3.3.1 (2010-03-16) on ip-10-28-254-160"
    },
    {
      "Name": "X-Spam-Status",
      "Value": "No"
    },
    {
      "Name": "X-Spam-Score",
      "Value": "-2.3"
    },
    {
      "Name": "X-Spam-Tests",
      "Value": "RCVD_IN_DNSWL_MED,SPF_PASS"
    },
    {
      "Name": "Received-SPF",
      "Value": "Pass (sender SPF authorized) identity=mailfrom; client-ip=17.172.204.239; helo=st11p01mm-asmtp004.mac.com; envelope-from=markson@me.com; receiver=0488857a2c5749b158dd1d92f94417f8@inbound.postmarkapp.com"
    },
    {
      "Name": "X-Proofpoint-Virus-Version",
      "Value": "vendor=fsecure engine=2.50.10432:5.10.8794,1.0.431,0.0.0000 definitions=2013-08-05_02:2013-08-05,2013-08-05,1970-01-01 signatures=0"
    },
    {
      "Name": "X-Proofpoint-Spam-Details",
      "Value": "rule=notspam policy=default score=0 spamscore=0 ipscore=0 suspectscore=1 phishscore=0 bulkscore=0 adultscore=0 classifier=spam adjust=0 reason=mlx scancount=1 engine=6.0.2-1305010000 definitions=main-1308050026"
    },
    {
      "Name": "Content-transfer-encoding",
      "Value": "7bit"
    },
    {
      "Name": "Message-id",
      "Value": "<05E54ACE-083E-41EF-BAC6-A619187025B0@me.com>"
    },
    {
      "Name": "MIME-version",
      "Value": "1.0 (Mac OS X Mail 6.5 \\(1508\\))"
    },
    {
      "Name": "X-Mailer",
      "Value": "Apple Mail (2.1508)"
    }
  ],
  "Attachments": []
};
	it("should return the the content which is test", function(){
		var mailContent = parseJSON(returnJSON);
		expect(mailContent).toEqual('test');
	});
})
