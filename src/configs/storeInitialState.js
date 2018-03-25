import {
	CONVERSATION_TYPE__CONTACT,
	CONVERSATION_TYPE__CHANNEL,
} from '../modules/conversations/constants';


const now = new Date().valueOf();


export default {
	"channels": {
		"1": {
			"id": "1",
			"name": "Свободное общение",
		},
	},
	"contacts": {
		"king": {
			"id": "king",
			"firstName": "Владимир",
			"lastName": "Путин",
			"avatarUrl": "",
		},
		"29": {
			"id": "29",
			"firstName": "Валерий",
			"lastName": "Пинаев",
			"avatarUrl": "",
		},
		"6": {
			"id": "6",
			"firstName": "Иван 6",
			"lastName": "Иванов",
			"avatarUrl": "",
		},
		"7": {
			"id": "7",
			"firstName": "Иван 7",
			"lastName": "Иванов",
			"avatarUrl": "",
		},
	},
	"conversations": {
		"list": {
			"1": {
				"id": "1",
				"type": CONVERSATION_TYPE__CONTACT,
				"readOnly": false,
				"entityId": "king",
				"lastUpdate": (now + 10),
				"unreadMessages": 0,
			},
			"2": {
				"id": "2",
				"type": CONVERSATION_TYPE__CONTACT,
				"readOnly": true,
				"entityId": "29",
				"lastUpdate": (now + 9),
				"unreadMessages": 0,
			},
			"3": {
				"id": "3",
				"type": CONVERSATION_TYPE__CHANNEL,
				"readOnly": false,
				"entityId": "1",
				"lastUpdate": (now + 8),
				"unreadMessages": 0,
			},
		},
	},
	"messages": {
		"1": [
			{
				"id": "1",
				"message": "Россия должна стать самой привлекательной для жизни страной",
			},
			{
				"id": "2",
				"message": "Считаю, что минимальной планкой доли среднего класса в общей структуре населения к 2020 году должен быть для нас уровень не менее 60 процентов, а может быть, и 70 процентов",
			},
		],
		"3": [
			{
				"id": "3",
				"message": "Test 1",
				"contactId": "6",
			},
			{
				"id": "4",
				"message": "Test 2",
				"contactId": "6",
			},
			{
				"id": "5",
				"message": "Test 3",
				"contactId": "7",
			},
			{
				"id": "6",
				"message": "Test 4",
				"contactId": "6",
			},
			{
				"id": "7",
				"message": "Test 5",
				"my": true,
			},
			{
				"id": "8",
				"message": "Test 6",
				"contactId": "7",
			},
		],
	},
};